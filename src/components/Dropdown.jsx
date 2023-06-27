import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useStateContext } from "../contexts/ContextProvider";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Dropdown() {
    const { setMode, currentMode } = useStateContext();
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className={`inline-flex w-24 justify-center gap-x-1.5 rounded-md bg-${currentMode} px-3 py-2 text-sm font-semibold text-cyan-500 shadow-sm ring-1 ring-inset ring-cyan-500 `}>
                    Theme
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-cyan-500" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className={`absolute right-0 z-10 mt-2 w-24 origin-top-right rounded-md bg-${currentMode} shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    
                                    href="#"
                                    className={classNames(
                                        
                                        'block px-2  text-sm'
                                    )}
                                >
                                    <div className="mt-4">
                                        <input
                                            type="radio"
                                            id="light"
                                            name="theme"
                                            value="Light"
                                            className="cursor-pointer"
                                            onChange={setMode}
                                            checked={currentMode === "Light"}
                                        />
                                        <label onChange={setMode}
                                            checked={currentMode === "Light"} htmlFor="light" className="ml-2 text-md text-cyan-500 cursor-pointer">
                                            Light
                                        </label>
                                    </div>
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    
                                    href="#"
                                    className={classNames(
                                        
                                        'block px-2 text-sm'
                                    )}
                                >
                                    <div className="mt-4">
                                        <input
                                            type="radio"
                                            id="dark"
                                            name="theme"
                                            value="Dark"
                                            className="cursor-pointer"
                                            onChange={setMode}
                                            checked={currentMode === "Dark"}
                                        />
                                        <label onChange={setMode}
                                            checked={currentMode === "Dark"} htmlFor="dark" className="ml-2 text-cyan-500 text-md cursor-pointer">
                                            Dark
                                        </label>
                                    </div>
                                </a>
                            )}
                        </Menu.Item>


                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}