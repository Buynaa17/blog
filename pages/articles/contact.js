import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";

export default function HomeContact() {
  return (
    <div>
      <div className="w-[1200px] m-auto">
        <Header />
      </div>
      <div className="w-[770px] m-auto border">
        <div className=" text-center">
          <h2 className=" font-bold text-3xl p-8  mt-32">Contact Us</h2>
          <p className="p-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
          <div className="flex rounded gap-5 mb-10 items-center justify-center">
            <div className="p-8 border rounded">
              Address
              <p>
                1328 Oak Ridge Drive, Saint <br /> Louis, Missouri
              </p>
            </div>
            <div className="p-8 border rounded ">
              Contact
              <p>
                313-332-8662 <br /> info@email.com
              </p>
            </div>
          </div>
        </div>

        <div className="w-[643px] h-[440px] bg-[#F6F6F7] m-auto p-10">
          <h1 className="p-8 font-bold text-2xl">Leave a Message</h1>
          <div className="mb-5 flex gap-3 ">
            <input
              className="w-[225px]  rounded-md"
              type="text"
              placeholder="Your name"
            ></input>
            <input
              className="w-[225px]  rounded-md"
              type="text"
              placeholder="Your email"
            ></input>
          </div>

          <input
            className="w-[478px] mb-5 rounded-lg "
            type="text"
            placeholder="Your email"
          ></input>
          <input
            className="w-[478px] rounded-lg  mb-5 h-[134px] "
            type="text"
            placeholder="Your email"
          ></input>
        </div>
      </div>
      <div className="w-[1200px] m-auto">
        <Footer />
      </div>
    </div>
  );
}
