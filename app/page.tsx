
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Button } from '@radix-ui/themes';
import "@radix-ui/themes/styles.css";
import Image from "next/image";
import { IoPlayCircleOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="flex w-[1440px] items-center justify-between">
        <div className="flex flex-col justify-center pt-[151px] pl-[134px]">
          <span className="font-bold text-[50px] w-[529px] font-poppins leading-[58.5px] text-customdarkgrey">
            Book Your{" "}
            <span className="text-customgreen inline-block">
              Flight{" "}
              <img
                className="w-[50px] h-[53px] -mt-20 -ml-5 inline-block"
                src="/planelogo.png"
                alt="plane logo"
              />{" "}
            </span>
            <br />
            Today With Award
            <br />
            Winning Airline
          </span>
          <span className="text-customdarkgrey mt-10 h-[19px] font-sans font-medium text-[16px] leading-[19.2px] text-left">
            Where Excellence Sparks Everlasting Memories
          </span>
          <div className="flex items-center mt-[40px] justify-between w-[335px]">
            <button className="bg-customgreen text-white py-[13px] px-[28px] rounded">
              Book A Flight
            </button>
            <button className="flex items-center">
              <IoPlayCircleOutline className="text-customgreen mr-[8px] h-[55px] w-[55px]" />{" "}
              Watch Video
            </button>
          </div>
          <div>
            <img
              src="/coin.png"
              alt=""
              className="w-[390px] h-[119.42] mt-[44px] "
            />
          </div>
        </div>
        <div>
          <Image
            src="/plane.png"
            alt="home"
            width={400}
            height={249.02}
            className="-rotate-[10.88deg] mt-[35px]"
          />
          <form action="submmit" className="flex flex-col w-[474px] h-[342px] mr-[186px] shadow-custom-multi justify-center items-center">
            <span className='mb-[18px] h-[24px] font-sans font-medium text-[20px] leading-[24px] text-customdarkgrey'>Your next adventure is just a search away</span>
            <DropdownMenu.Root >
      <DropdownMenu.Trigger className="pl-[10px] pr-[25px] w-[419px] h-[76px] border-customgrey border-[1px] rounded-[5px] focus:outline-none flex justify-between items-center mb-[18px]">
     <span className="flex  items-start justify-start text-left leading-7">From <br /> Addis Ababa | aDD</span> <MdOutlineKeyboardArrowDown  className="h-[50px] w-[25px] text-customgreen"/>

      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="bg-white border border-gray-300 rounded shadow-lg mt-2 w-[419px]">
        <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100 w-48">Item 1</DropdownMenu.Item>
        <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100">Item 2</DropdownMenu.Item>
        <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100">Item 3</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>

    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="pl-[10px] pr-[25px] w-[419px] h-[76px] border-customgrey border-[1px] rounded-[5px] focus:outline-none flex justify-between items-center">
     <span className="flex  items-start justify-start text-left leading-7">To <br />Where Are You Going ?</span> <MdOutlineKeyboardArrowDown  className="h-[50px] w-[25px] text-customgreen"/>

      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="bg-white border border-gray-300 rounded shadow-lg mt-2 w-[419px]">
        <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100">Item 1</DropdownMenu.Item>
        <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100">Item 2</DropdownMenu.Item>
        <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100">Item 3</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
    <button className='bg-white border-[1px] border-customgreen rounded-[5px] w-[126px] h-[45px] py-[13px] px-[28px] mt-[30px] inline-block items-start ' >Continue</button>
          </form>
        </div>
      </div>
    </main>
  );
}
