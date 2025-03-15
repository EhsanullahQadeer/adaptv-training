import Image from "next/image";
import training_img_1 from "../../assets/images/training-img-1.png";
import training_img_2 from "../../assets/images/training-img-2.png";

const LearnSection = () => {
  return (
    <div className="py-[120px] bg-black">
      <div className="mx-4">
        <div className="max-w-[1040px] mx-auto">
          <h2 className="text-center text-white">
            Connect, Learn, and Grow
          </h2>

          <div className="mt-9">
            <div className="flex gap-5">
              <div className="bg-froasted-glass rounded-3xl text-white flex-1">
                <div className="h-full w-full flex justify-center items-center p-20 relative">
                  <div className="absolute top-20 left-20 rounded-md px-2 py-1 bg-ocean-glow text-xs font-bold tracking-[-0.06px] leading-[14px]">
                    01
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <h2>Our Mission</h2>
                    <p className="text-lg font-normal tracking-[-0.18px] leading-[132%] text-translucent-white">
                      We strive to empower fitness professionals and clients
                      across the world with a platform to connect, learn, and
                      grow through adaptable coaching experiences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 rounded-3xl">
                <Image
                  className="w-full h-full object-cover rounded-3xl aspect-square"
                  src={training_img_1}
                  alt="training_img_1"
                />
              </div>
            </div>

            <div className="mt-5 flex gap-5">
              <div className="flex-1 rounded-3xl">
                <Image
                  className="w-full h-full object-cover rounded-3xl aspect-square"
                  src={training_img_2}
                  alt="training_img_2"
                />
              </div>

              <div className="bg-froasted-glass rounded-3xl text-white flex-1">
                <div className="h-full w-full flex justify-center items-center p-20 relative">
                  <div className="absolute top-20 left-20 rounded-md px-2 py-1 bg-orange-red text-xs font-bold tracking-[-0.06px] leading-[14px]">
                    02
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <h2>Our Vision</h2>
                    <p className="text-lg font-normal tracking-[-0.18px] leading-[132%] text-translucent-white">
                      Ensuring that human connections stay at the heart of
                      fitness in a world shaped by technology
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnSection;
