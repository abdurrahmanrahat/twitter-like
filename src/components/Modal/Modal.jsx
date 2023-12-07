import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const image_hoisting_token = import.meta.env.VITE_image_uplode_token;

export default function Modal({ isOpen, setIsOpen, refetch }) {
  const { register, handleSubmit } = useForm();
  function closeModal() {
    setIsOpen(false);
  }

  const onCancel = () => {
    setIsOpen(false);
  };

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hoisting_token}`;
  const onSubmit = (data) => {
    onCancel();
    const postTitle = data.postTitle;
    const postDescription = data.postDescription;
    console.log(data);

    const formData = new FormData();
    formData.append("image", data.photo[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const postPhoto = imgResponse.data.display_url;
          const currentDateInMillis = new Date().getTime();

          const newPost = {
            img: postPhoto,
            title: postTitle,
            description: postDescription,
            dateInMillis: currentDateInMillis,
          };

          // saved data to db
          fetch("https://demo-twitter-server.vercel.app/posts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newPost),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("inside post response", data);
              if (data.insertedId) {
                refetch();
                toast.success("Post Uploaded Successfully.");
              }
            });
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {/* form here */}
                    {/* form for update */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="grid grid-cols-1 gap-6">
                        {/* Post Title */}
                        <div>
                          <label className="block mb-[5px] font-bold">
                            Post Title
                          </label>
                          <input
                            className="w-full p-2 border border-solid border-[#ccc] rounded-lg"
                            type="text"
                            placeholder="post title"
                            {...register("postTitle", { required: true })}
                          ></input>
                        </div>

                        {/* Post Photo */}
                        <div className="form-control w-full max-w-xs">
                          <label className="block mb-[5px] font-bold">
                            Your Photo
                          </label>
                          <input
                            type="file"
                            {...register("photo", { required: true })}
                            className="file-input file-input-bordered w-full max-w-xs"
                          />
                        </div>

                        {/* post description Field */}
                        <div className="form-control flex flex-col mt-6">
                          <label className="block mb-[5px] font-bold">
                            Post Description
                          </label>
                          <textarea
                            name="postDescription"
                            id=""
                            cols="30"
                            rows="4"
                            {...register("postDescription", { required: true })}
                            className="w-full p-2 border border-solid border-[#ccc] rounded-lg"
                          ></textarea>
                        </div>
                      </div>

                      <div className="flex items-center justify-center mt-10">
                        <button
                          type="submit"
                          className="w-[60%] bg-[#1575a7] py-2 text-[18px] text-white font-[500] rounded-lg"
                        >
                          Post
                        </button>
                      </div>
                    </form>
                  </Dialog.Title>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
