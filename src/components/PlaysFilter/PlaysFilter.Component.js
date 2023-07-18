import { Disclosure } from '@headlessui/react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
const PlaysFilter = (props) =>{
        return (
            <Disclosure>
           {({ open }) => (
           <>
      <Disclosure.Button className=" h-14 py-2 ml-4 text-lg font-semibold flex items-center gap-2 hover:cursor-pointer hover:underline">
        {open ? <BiChevronUp/> :<BiChevronDown/>}
        <span className={open ? "text-red-600" : "text-gray-800"}>

        {props.title}
        </span>
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500 ">
        <div className=" px-3 flex items-center gap-3 flex-wrap ">
            {props.tags.map((tag) => (
            <>
            <div className=" border-2  border-gray-300 rounded-2xl text-base py-2 px-2 mb-3 hover:cursor-pointer hover:underline">
                <span className="text-red-600" >{tag}</span>
            </div>
            </>
            ))
        }
        </div>
      </Disclosure.Panel>
      </>
    )}     
    </Disclosure>
    );
};
export default PlaysFilter;