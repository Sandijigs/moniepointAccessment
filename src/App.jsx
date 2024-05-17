// import { motion } from "framer-motion";
import logo from "../src/assets/rammos-logo.png";
import dottedGraph from "../src/assets/dottedIcon.png";
import sectionImage from "../src/assets/section1-Image.png";
import yellowRounded from "../src/assets/yellow-Round-Icon.png";
import {
  HiOutlineSquare3Stack3D,
  HiOutlineBars3BottomLeft,
} from "react-icons/hi2";
import { AiOutlineArrowUp } from "react-icons/ai";
import { IoFlash, IoNotificationsOutline } from "react-icons/io5";
import { TfiWallet } from "react-icons/tfi";
import { TbHexagonMinus } from "react-icons/tb";
import { MdPhonelinkOff } from "react-icons/md";
import TwinBarChart from "./component/twinBarChart";
import Avatars from "../src/assets/avatars.png";
import Timer from "../src/assets/timer-image.png";
import "./App.css";
import { Card } from "antd";
import { MdAdd } from "react-icons/md";
import BarChartComponent from "./component/<BarChartComponent";
import ScatteredLine from "./component/ScatteredChat";
import SmallScatteredLine from "./component/SmallScattered-line";
import { AiOutlineShareAlt } from "react-icons/ai";
import avatarimg from "../src/assets/avatarimg2.png";
import avatarimg2 from "../src/assets/avatarimg3.png";
import { MdInsights } from "react-icons/md";
import redLogo from "../src/assets/red-logo.png";
import QrCode from "../src/assets/qrcode.png";
import SideIcon from "../src/assets/sideIcon.png";
import HeightBar from "./component/composedchart";
const SAMPLEA_DATA2 = [
  { month: "jan", green: 500 },
  { month: "feb", green: 800 },
  { month: "mar", green: 1000 },
  { month: "apr", green: 1200 },
  { month: "may", green: 1000 },
  { month: "june", green: 800 },
  { month: "july", green: 500 },
  { month: "aug", green: 800 },
  { month: "sept", green: 1000 },
  { month: "oct", green: 1200 },
  { month: "nov", green: 1000 },
  { month: "dec", green: 800 },
];

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className=" w-auto h-auto bg-white flex  rounded-xl mb-10 flex-col items-center ">
        <div className=" w-full px-5 ">
          <div className=" w-[ 98%] h-16 bg-black  rounded-2xl mt-2 flex items-center px-5 justify-between">
            <div className="">
              <img src={logo} alt=" ramos-logo" className="" />
            </div>
            <div className=" flex bg-[#252525] w-[40%] h-[73%] items-center justify-center rounded-xl ">
              <ul className=" flex space-x-6 ">
                <li className=" text-white font-extralight">
                  <a to="/"> Dashboard</a>
                </li>
                <li className=" text-white font-extralight">
                  <a to="/"> Reports</a>
                </li>
                <li className=" text-white font-extralight">
                  <a to="/"> Document</a>
                </li>
                <li className=" text-white font-extralight">
                  <a to="/">History</a>
                </li>
                <li className=" text-white font-extralight">
                  <a to="/">Settings</a>
                </li>
              </ul>
            </div>
            <div className=" flex bg-[#ffff] w-[10%] h-[73%] items-center justify-center rounded-xl font-light">
              SignUp
            </div>
          </div>
        </div>
        <section className=" mt-5  px-5">
          <div className=" flex  w-full ">
            <div>
              <div className=" flex items-start ">
                {/* circle divs */}
                <div className=" flex relative left-28 top-10 ">
                  <div className=" w-28 h-28 bg-[#F2F2F2] rounded-full flex items-center justify-center ">
                    <IoFlash className=" text-[#FD4A22] text-[35px]" />
                  </div>
                  <div className=" w-28 h-28 bg-[#FD4A22] rounded-full flex items-center justify-center absolute left-20 ">
                    <img
                      src={dottedGraph}
                      alt=" dotted"
                      height={35}
                      width={35}
                    />
                  </div>
                </div>
                {/* dotted Circle */}
                <div className=" font-normal text-[90px] ml-52 mt-10 font-poppins text-primary">
                  Analytics
                </div>
              </div>
              <div className=" font-normal text-[90px]  font-poppins text-primary">
                that<span className=" text-gray"> helps</span> You
              </div>
            </div>

            <div>
              <img
                src={sectionImage}
                alt=""
                width={430}
                height={440}
                className="mt-10"
              />
            </div>
          </div>
          <div className=" flex justify-end space-x-6">
            <div className=" font-normal text-[90px]  font-poppins text-primary">
              Shape
            </div>
            <img src={yellowRounded} alt=" icon" height={80} width={130} />
            <div className=" font-normal text-[90px]  font-poppins text-primary">
              the Future
            </div>
          </div>
        </section>
        <div className=" bg-[#F9F9F9] w-full h-auto rounded-[100px] p-10 mt-16">
          <div className=" w-full flex space-x-32 items-center">
            <p className=" font-normal text-[40px]  font-poppins text-primary w-[50%] text-left ">
              Your Key to strategic success through analytics
            </p>
            <p className=" font-light text-[20px]  font-poppins text-primary text-left w-[40%]">
              Ready for excitong instantaneous, all-accessible insight in real
              time?
            </p>
          </div>
          <div className=" w-full  flex mt-5  justify-between">
            <div className=" bg-white p-7 flex w-[58%] justify-between rounded-3xl  border-[#DDDEE2]  border-[0.01px]">
              <div className=" flex flex-col w-[45%] items-start space-y-[65px]">
                <div className="bg-[#FFD028] w-32 h-10 flex items-center justify-center p-2 rounded-xl">
                  <p className=" font-poppins font-light leading-tight text-xs ">
                    Setting up reports
                  </p>
                </div>
                <div className="">
                  <p className=" font-normal text-[24px]  font-poppins text-primary text-left">
                    Fast and easy access to analytics
                  </p>
                </div>
                <div className=" ">
                  <p className=" font-light text-[14px]  font-poppins text-[#BDBDBD] text-left ">
                    One platform is a comprehensive system of solutions that
                    will be the first step toward digitalization of your
                    business
                  </p>
                </div>
              </div>
              {/* card */}
              <div className="w-[50%] h-auto  border-[#DDDEE2]  border-l-[0.01px] border-t-[0.005px] border-b-[0.005px] p-3  rounded-l-2xl shadow-sm  ">
                <div className=" text-primary font-normal  text-xs">
                  Sale Statstics
                </div>

                <div className="w-full  flex  justify-between space-y-5  items-center space-x-4">
                  <div className=" w-10 h-10 bg-[#FD4A22] rounded-full flex items-center justify-center ">
                    <HiOutlineSquare3Stack3D className=" text-white text-base" />
                  </div>
                  <div>
                    <p className=" text-gray font-poppins font-normal  text-xs">
                      Total Profit
                    </p>
                    <p className=" text-primary font-poppins font-normal text-[22px]">
                      <span className=" font-light text-[18px] ">$</span> 264,2k
                    </p>
                  </div>
                  <div className=" w-30% h-auto bg-[#F6F6F6] rounded-xl flex flex-col justify-center items-center px-3 py-1 space-y-2">
                    <p className=" text-primary font-normal text-xs">
                      Visitors
                    </p>
                    <div className=" flex">
                      <div className=" w-10 h-1 bg-[#48C884] rounded-md"></div>
                      <div className=" w-10 h-1 bg-[#E6E6E6] rounded-md"></div>
                    </div>
                    <div className=" flex">
                      <p className=" text-primary font-poppins font-normal text-[18px]">
                        56K
                      </p>
                      <div className=" w-4 h-4 bg-[#48C884] rounded-full flex items-center justify-center">
                        <AiOutlineArrowUp className=" text-[10px] text-white" />
                      </div>
                      <p className=" text-[10px] text-[#48C884]">+14%</p>
                    </div>
                  </div>
                </div>

                {/* <div className=" w-full h-auto border-[0.5px] border-primary p-3 rounded-2xl mt-5 "> */}
                <div className="w-ful h-auto  border-[#DDDEE2]  border-l-[0.01px] border-t-[0.005px] border-b-[0.001px] border-b-[#F5F5F5] p-2  rounded-l-2xl shadow-sm  mt-5 relative  ">
                  <p className=" text-xs text-primary font-poppins font-normal text-left pt-2 ">
                    Visit Statistics
                  </p>
                  <div className=" h-auto w-[full]  relative right-20  top-3">
                    <ScatteredLine />
                  </div>
                  <div className=" bg-[#FD4A22]  w-28 h-[65px] rounded-lg  absolute p-[7px] bottom-3 left-44">
                    <div className=" flex justify-between">
                      <p className=" text-gray font-poppins font-light text-[12px]">
                        Rates
                      </p>
                      <TbHexagonMinus className=" text-gray text-[15px]" />
                    </div>
                    <div className=" w-full flex items-center">
                      <p className=" text-gray text-[12px]">+</p>
                      <p className=" text-white font-poppins font-light text-[17px]">
                        58%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-[#0D0D0D] w-[40%] h-auto p-3 rounded-3xl gap-x-4 ">
              <div className="w-full  flex space-x-3 h-[150px]">
                <Card className="bg-[#121111] w-[50%]  shadow-xl border-[#4E4E4E] rounded-3xl p-3 flex flex-col items-center justify-center">
                  <div className=" mb-3  ml-3">
                    <HiOutlineSquare3Stack3D className=" text-[#FFD028] text-4xl" />
                  </div>
                  <div>
                    <img src={Avatars} alt="avatars" width={70} height={70} />
                  </div>
                </Card>
                <Card className="bg-[#121111] w-[50%]  shadow-xl  border-[#4E4E4E] rounded-3xl flex  flex-col items-center">
                  <div>
                    <p className=" text-sm text-white font-poppins font-extralight ">
                      Transactions
                    </p>
                  </div>
                  <div className=" flex mt-10">
                    <p className=" text-white font-poppins font-normal text-[28px]">
                      43K
                    </p>
                    <div className=" flex relative bottom-5 space-x-[2px]">
                      <div className=" w-4 h-4 bg-[#48C884] rounded-full flex items-center justify-center">
                        <AiOutlineArrowUp className=" text-[10px] text-white" />
                      </div>
                      <p className=" text-[10px] text-[#48C884]">+14%</p>
                    </div>
                  </div>
                </Card>
              </div>
              <div className=" mt-12">
                <p className=" text-lg text-white font-poppins font-normal ">
                  Widget Control
                </p>
              </div>
              <div className=" mt-5">
                <p className=" text-base text-gray font-poppins font-extralight ">
                  Reports provides a comprehensive overview of important aspect
                  web analytics
                </p>
              </div>
            </Card>
          </div>

          <div className=" flex items-center justify-center space-x-5 ">
            <p className=" font-normal text-[34px] font-poppins text-primary mt-5 ">
              Up to
            </p>
            <p className=" font-normal text-[100px] font-poppins text-primary ">
              45%
            </p>
            <p className=" font-light text-[14px]  font-poppins text-primary text-left w-[40%] ">
              Increse your analytics efficiency by up to 45%.Unique algorithm
              provides insight from data. reduce time for analysis and save time
              for making important informed decisions.
            </p>
          </div>
        </div>
        <section className="w-full  mb-10 px-12">
          <div>
            <div className=" font-normal text-[90px]  font-poppins text-primary text-left">
              Maximize <span className=" text-gray"> Efficiency</span>
            </div>
            <div className=" font-normal text-[90px]  font-poppins text-primary text-left">
              With our intuitive
            </div>
            <div className=" w-full  flex  justify-between mt-5">
              <div className=" flex relative   ">
                <div className="   w-40 h-40  bg-[#F2F2F2] rounded-full flex items-center justify-center z-50 ">
                  <img src={Timer} alt="" width={120} height={120} />
                </div>
                <div className=" w-40 h-40 bg-[#FFD028] rounded-full flex flex-col  items-center justify-center absolute left-32  ">
                  <p className=" font-medium text-[24px]  font-poppins text-primary">
                    45%
                  </p>
                  <p className=" font-normal text-[12px]  font-poppins text-primary w-24  ">
                    System grow faster
                  </p>
                </div>
              </div>

              <div className=" text-move-left-to-right  bg-[#FFD028] w-[450px] h-40 rounded-[75px] overflow-hidden">
                <marquee
                  direction="left"
                  height="200px"
                  behavior="scroll"
                  scrollamount="20"
                  className="font-normal text-[120px] font-poppins text-primary"
                >
                  Analytic Services
                </marquee>
              </div>
            </div>
            <div className=" w-full h-[1px] bg-[#EEEEEE] my-12" />

            <div className=" w-full flex justify-between">
              <p className=" font-light text-[14px]  font-poppins text-primary w-[57%] text-left ">
                Explore the traffic sources, pages behaviour, conversations and
                more. To gain deep insight into your audience with us. Your
                business doesnt just adapt - it evolves
              </p>
              <div className=" flex space-x-10  ">
                <div className=" w-44 h-12 bg-[#F2F2F2] flex items-center justify-center rounded-2xl">
                  <p className=" font-light text-[12px]  font-poppins text-[#424242] ">
                    Request a demo
                  </p>
                </div>
                <div className=" w-44 h-12 bg-[#FD4A22] flex items-center justify-center rounded-2xl">
                  <p className=" font-light text-[12px]  font-poppins text-white ">
                    Start for Free
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Card className=" bg-[#F9F9F9] w-full h-auto rounded-[100px] p-10 mt-16 overflow-hidden">
          <div className="w-[60%] ">
            <p className=" font-normal text-[35px]  font-poppins text-primary w-[60%] text-left ">
              Turning Data into real actions and ideas
            </p>
          </div>
          <div className="w-full  flex justify-around">
            <div className="w-full  space-y-5 mt-10 flex flex-col ">
              <div className=" w-[300px] h-20 bg-[#FFFF] flex items-center justify-between px-4 py-2 rounded-[30px] border-[#F2F2F2] border-[1px]">
                <p className=" font-normal text-[18px]  font-poppins text-primary">
                  Instant Insight
                </p>
                <div className=" w-10 h-10 bg-[#F2F2F2] flex items-center justify-center rounded-full">
                  <MdAdd className=" text-lg" />
                </div>
              </div>
              <div className=" w-[300px] h-20 bg-[#FFFF] flex items-center justify-between px-4 py-2 rounded-[30px] border-[#F2F2F2] border-[1px]">
                <p className=" font-normal text-[18px]  font-poppins text-primary">
                  AI Technology
                </p>
                <div className=" w-10 h-10 bg-[#F2F2F2] flex items-center justify-center rounded-full">
                  <MdAdd className=" text-lg" />
                </div>
              </div>
              <div className=" w-[300px] h-20 bg-[#FFFF] flex items-center justify-between px-4 py-2 rounded-[30px] border-[#F2F2F2] border-[1px]">
                <p className=" font-normal text-[18px]  font-poppins text-primary">
                  Easy Integration
                </p>
                <div className=" w-10 h-10 bg-[#F2F2F2] flex items-center justify-center rounded-full">
                  <MdAdd className=" text-lg" />
                </div>
              </div>
            </div>
            <div className=" flex relative right-[600px]">
              {/* Phone component */}
              <div className="w-[260px] h-[520px] border-[9px] border-black rounded-[35px] bg-white overflow-hidden absolute z-20 top-[150px] left-[-110px]">
                <div className=" w-full flex items-center justify-center">
                  <div className="w-[120px] h-5 bg-black rounded-b-[12px]  " />
                </div>
                <div className=" w-full flex justify-between px-5">
                  <HiOutlineBars3BottomLeft />
                  <IoNotificationsOutline />
                </div>
                <div>
                  <div className=" w-full flex items-start px-5">
                    <p className=" text-gray font-poppins font-normal text-[14px]">
                      Revenue amount
                    </p>
                  </div>
                  <div className=" w-full px-5">
                    <div className=" flex space-x-1">
                      <div className=" flex items-center">
                        <p className=" text-primary font-poppins font-normal text-[15px]">
                          $
                        </p>
                        <p className=" text-primary font-poppins font-normal text-[20px]">
                          1342,5678K
                        </p>
                      </div>
                      <div className=" w-4 h-4 bg-[#48C884] rounded-full flex items-center justify-center">
                        <AiOutlineArrowUp className=" text-[10px] text-white" />
                      </div>
                      <p className=" text-[10px] text-[#48C884]">+14%</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center h-full pt-5 w-full ">
                    <BarChartComponent
                      barSize={19.1}
                      data={SAMPLEA_DATA2}
                      radius={3}
                    />
                  </div>
                  <div className=" bg-[#F2F2F2] w-full h-[314px] rounded-t-[20px] relative bottom-5 rounded-b-[28px]  z-10 flex items-start justify-start ">
                    <div className=" py-5">
                      <p className=" text-primary font-poppin font-normal text-[13px]">
                        Data Report
                      </p>
                      <div className=" flex space-x-1 overflow-hidden px-1">
                        <div className="bg-[#FFFF] w-[94px] h-[46px] rounded-md  flex items-center space-x-1 p-2">
                          <div className=" w-6 h-6 bg-[#FD4A22] rounded-full flex items-center justify-center ">
                            <HiOutlineSquare3Stack3D className=" text-white text-[8px]" />
                          </div>
                          <div className="">
                            <p className=" text-gray font-poppin font-light text-[9px]">
                              Total Profit
                            </p>
                            <div className=" flex items-center">
                              <p className=" text-primary font-poppins font-normal text-[9px]">
                                $
                              </p>
                              <p className=" text-primary font-poppins font-normal text-[14px]">
                                264.2K
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#FFFF] w-[94px] h-[46px] rounded-md  flex items-center space-x-1 p-2">
                          <div className=" w-6 h-6 bg-[#FEE692] rounded-full flex items-center justify-center ">
                            <HiOutlineSquare3Stack3D className=" text-white text-[8px]" />
                          </div>
                          <div className="">
                            <p className=" text-gray font-poppin font-light text-[9px]">
                              Sales revenue
                            </p>
                            <div className=" flex items-center">
                              <p className=" text-primary font-poppins font-normal text-[9px]">
                                $
                              </p>
                              <p className=" text-primary font-poppins font-normal text-[14px]">
                                264.2K
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#FFFF] w-[94px] h-[46px] rounded-md  flex items-center space-x-1 p-2">
                          <div className=" w-6 h-6 bg-[#48C884] rounded-full flex items-center justify-center ">
                            <HiOutlineSquare3Stack3D className=" text-white text-[8px]" />
                          </div>
                          <div className="">
                            <p className=" text-gray font-poppin font-light text-[9px]">
                              Average bill
                            </p>
                            <div className=" flex items-center">
                              <p className=" text-primary font-poppins font-normal text-[9px]">
                                $
                              </p>
                              <p className=" text-primary font-poppins font-normal text-[14px]">
                                264.2K
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" w-full pl-[5px] ">
                        <div className=" bg-white w-[79%]  h-24 mt-3  p-[2px]  rounded-md relative flex  justify-between">
                          <div className=" w-full  px-1  ">
                            <p className=" text-primary font-poppins font-normal text-[6px] text-left  mb-4">
                              Sales Statistics
                            </p>
                            <TwinBarChart height={330} color="orange" />
                          </div>

                          <div>
                            <div className=" bg-[#F6F6F6] w-16 h-[42px] rounded-md mb-1">
                              <p className=" text-primary font-poppins font-normal text-[6px]">
                                Transactions
                              </p>
                              <p className=" text-gray font-poppins font-normal text-[6px]">
                                4 months
                              </p>
                              <p className=" text-primary font-poppins font-normal text-[9px]">
                                244.2K
                              </p>
                            </div>
                            <div className=" bg-[#FFD028]  w-16 h-[42px] rounded-md p-1">
                              <div className=" flex justify-between">
                                <p className=" text-primary font-poppins font-normal text-[6px]">
                                  Rates
                                </p>
                                <TbHexagonMinus className=" text-[7px]" />
                              </div>
                              <div className=" w-full flex items-start">
                                <p className=" text-primary font-poppins font-normal text-[9px]">
                                  +48%
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className=" bg-white w-[79%] h-24 mt-3  p-[2px]  rounded-md relative flex  justify-between">
                          <div className=" w-full  px-1  ">
                            <p className=" text-primary font-poppins font-normal text-[6px] text-left mb-4 ">
                              visit Statistics
                            </p>
                            <div className=" h-auto w-[full]  relative right-20  bottom-5">
                              <SmallScatteredLine />
                            </div>
                          </div>

                          <div>
                            <div className=" bg-[#F6F6F6] w-16 h-[41px] rounded-md mb-1">
                              <p className=" text-primary font-poppins font-normal text-[6px]">
                                Transactions
                              </p>
                              <p className=" text-gray font-poppins font-normal text-[6px]">
                                4 months
                              </p>
                              <p className=" text-primary font-poppins font-normal text-[9px]">
                                244.2K
                              </p>
                            </div>
                            <div className=" bg-[#FD4A22]  w-16 h-[43px] rounded-md p-1">
                              <div className=" flex justify-between">
                                <p className=" text-gray font-poppins font-normal text-[6px]">
                                  Rates
                                </p>
                                <TbHexagonMinus className=" text-gray text-[7px]" />
                              </div>
                              <div className=" w-full flex items-start">
                                <p className=" text-gray font-poppins font-normal text-[9px]">
                                  +48%
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* phone component end */}
              {/* Tab Component Begins  */}
              <div className="w-[860px] h-[520px] border-[16px] border-black rounded-[35px] bg-white overflow-hidden absolute left-12">
                <div className=" w-[ 98%] h-9 bg-black  rounded-2xl mt-2 flex items-center px-5 justify-between mx-2">
                  <div className="">
                    <img src={logo} alt=" ramos-logo" width={50} height={50} />
                  </div>
                  <div className=" flex bg-[#252525] w-[40%] h-[73%] items-center justify-center rounded-xl ">
                    <ul className=" flex space-x-6 ">
                      <li className=" text-white font-extralight">
                        <a to="/"> Search</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className=" mt-3">
                  <div className=" w-full flex items-start px-5">
                    <p className=" text-gray font-poppins font-normal text-[8px]">
                      Revenue amount
                    </p>
                  </div>
                  <div className=" w-full px-5">
                    <div className=" flex space-x-1">
                      <div className=" flex items-center">
                        <p className=" text-primary font-poppins font-normal text-[20px]">
                          $
                        </p>
                        <p className=" text-primary font-poppins font-normal text-[30px]">
                          1342,5678K
                        </p>
                      </div>
                      <div className=" w-4 h-4 bg-[#48C884] rounded-full flex items-center justify-center">
                        <AiOutlineArrowUp className=" text-[10px] text-white" />
                      </div>
                      <p className=" text-[10px] text-[#48C884]">+14%</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center h-full pt-5 w-full ">
                    <BarChartComponent
                      barSize={68}
                      data={SAMPLEA_DATA2}
                      radius={5}
                    />
                  </div>

                  <div className=" bg-[#F2F2F2] w-full h-[314px] rounded-t-[20px] relative bottom-5 rounded-b-[28px] z-10">
                    <div className=" w-full flex justify-center ">
                      <div className=" flex  space-x-6   bg-[#E6E6E6] h-10 w-[420px] mt-4 items-center justify-center rounded-2xl mr-20 ">
                        <div className=" flex items-center justify-center w-1/5 bg-white h-10 rounded-2xl relative right-4">
                          Dashboard
                        </div>
                        <div>Reports</div>
                        <div>Documents</div>
                        <div>History</div>
                        <div>Settings</div>
                      </div>
                    </div>
                    <div className=" w-full   flex items-start justify-start ">
                      <div className=" py-5 w-full">
                        <div className=" flex w-full px-3 space-x-2">
                          <div className="  space-x-1  px-1 bg-white w-[50%] h-auto rounded-2xl pt-4 space-y-3 ">
                            <p className=" text-primary font-poppin font-normal text-[13px] text-left px-3">
                              Data Report
                            </p>
                            <div className="  flex">
                              <div className=" w-1/3 h-[46px] rounded-md  flex items-center space-x-1 p-2">
                                <div className=" w-10 h-10 bg-[#FD4A22] rounded-full flex items-center justify-center ">
                                  <HiOutlineSquare3Stack3D className=" text-white text-[8px]" />
                                </div>
                                <div className="">
                                  <p className=" text-gray font-poppin font-light text-[9px]">
                                    Total Profit
                                  </p>
                                  <div className=" flex items-center">
                                    <p className=" text-primary font-poppins font-normal text-[12px]">
                                      $
                                    </p>
                                    <p className=" text-primary font-poppins font-normal text-[18px]">
                                      264.2K
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-[#FFFF]  w-1/3  h-[46px] rounded-md  flex items-center space-x-1 p-2">
                                <div className=" w-10 h-10 bg-[#FEE692] rounded-full flex items-center justify-center ">
                                  <TfiWallet className=" text-primary text-[12px]" />
                                </div>
                                <div className="">
                                  <p className=" text-gray font-poppin font-light text-[9px]">
                                    Sales revenue
                                  </p>
                                  <div className=" flex items-center">
                                    <p className=" text-primary font-poppins font-normal text-[12px]">
                                      $
                                    </p>
                                    <p className=" text-primary font-poppins font-normal text-[18px]">
                                      264.2K
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-[#FFFF]  w-1/3  h-[46px] rounded-md  flex items-center space-x-1 p-2">
                                <div className=" w-10 h-10 bg-[#48C884] rounded-full flex items-center justify-center ">
                                  <MdPhonelinkOff className=" text-primary text-[8px]" />
                                </div>
                                <div className="">
                                  <p className=" text-gray font-poppin font-light text-[9px]">
                                    Average bill
                                  </p>
                                  <div className=" flex items-center">
                                    <p className=" text-primary font-poppins font-normal text-[12px]">
                                      $
                                    </p>
                                    <p className=" text-primary font-poppins font-normal text-[18px]">
                                      264.2K
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className=" flex space-x-2">
                              <div className=" w-1/3">
                                <p className=" text-gray font-poppins font-normal text-[5px]">
                                  cpc pad
                                </p>
                                <p className=" text-primary font-poppins font-normal text-[9px]">
                                  50% /$123k
                                </p>
                                <div className=" h-1 bg-[#FEE692] rounded-sm"></div>
                              </div>
                              <div className=" w-1/3">
                                <p className=" text-gray font-poppins font-normal text-[5px]">
                                  cpc pad
                                </p>
                                <p className=" text-primary font-poppins font-normal text-[9px]">
                                  50% /$123k
                                </p>
                                <div className="  h-1 bg-[#48C884]  rounded-sm"></div>
                              </div>
                              <div className=" w-1/3">
                                <p className=" text-gray font-poppins font-normal text-[5px]">
                                  cpc pad
                                </p>
                                <p className=" text-primary font-poppins font-normal text-[9px]">
                                  50% /$123k
                                </p>
                                <div className=" h-1 bg-[#A17DFF]  rounded-sm"></div>
                              </div>
                            </div>
                          </div>

                          <div className=" h-auto w-[50%] bg-white rounded-2xl">
                            <div className=" w-full  px-1  ">
                              <p className=" text-primary font-poppins font-normal text-[12px] text-left mt-5 px-5  ">
                                visit Statistics
                              </p>
                              <div className=" h-auto w-[full]  relative right-20  ">
                                <ScatteredLine />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tab Component Ends */}
            </div>
          </div>

          <div className=" w-full mt-32">
            <p className=" font-semibold text-[295px]  font-poppins text-[#FD4A22] text-left">
              Ramos
            </p>
          </div>
        </Card>
        <section className="w-full  mb-10 px-12">
          <div>
            <p className=" font-normal text-[90px]  font-poppins text-primary text-left">
              We give you full
            </p>
            <div className=" flex space-x-1">
              <p className=" text-gray font-normal text-[90px]  font-poppins">
                Control
              </p>
              <p className=" font-normal text-[90px]  font-poppins text-primary text-left">
                Over Your Data
              </p>
            </div>
          </div>
          <div className=" w-full flex space-x-10 ">
            <div className=" w-[50%] h-auto  bg-[#F9F9F9] rounded-2xl p-5  border-[1px] border-[#EEEEEE]">
              <div className=" px-10 w-full">
                <div className=" w-full flex relative ml-8">
                  <div className=" w-[50%] h-auto bg-white flex  flex-col  p-5 space-y-3 rounded-lg border-[1px] border-[#F5F5F5]">
                    <p className=" font-light text-[10px]  font-poppins text-primary text-center ">
                      Conversion Rate
                    </p>
                    <div className=" w-full relative ml-3 ">
                      <img
                        src={SideIcon}
                        alt=""
                        width={32}
                        height={32}
                        className="relative  top-5"
                      />
                      <div className=" w-[100px] h-14 bg-[#FFD028] rounded-lg pt-3  ml-4 z-0 ">
                        <p className="  font-normal text-[28px]  font-poppins text-primary t ">
                          2.3%
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className=" font-light text-[10px]  font-poppins text-[#9E9E9E] w-20 ml-7 ">
                        Percentage of website visitors
                      </p>
                    </div>
                  </div>
                  <div className=" w-[50%] h-auto bg-white flex border-[1.5px] border-[#F5F5F5]  flex-col items-center  space-y-3 rounded-xl  absolute left-[170px] top-12 px-3 py-5">
                    <p className=" font-light text-[10px]  font-poppins text-primary ">
                      Sales evenue
                    </p>
                    <p className=" font-light text-[19px]  font-poppins text-primary ">
                      <span className=" text-[12px]">$ </span>313.2K
                    </p>
                    <div className=" flex space-x-[1px] w-full">
                      <div className=" h-1 bg-[#48C884] rounded-sm w-1/3" />

                      <div className="  h-1 bg-[#FEE692]  rounded-sm w-1/3" />

                      <div className=" h-1 bg-[#48C884]  rounded-sm w-1/3" />
                    </div>
                    <div className=" w-full space-y-1 ">
                      <div className=" w-full flex  justify-around items-center">
                        <img src={avatarimg} alt="" />
                        <p className=" font-light text-[9px]  font-poppins text-[#9E9E9E] ">
                          min price
                        </p>
                        <p className=" font-light text-[9px]  font-poppins text-primary ">
                          1200 $
                        </p>
                      </div>
                      <div className=" w-full flex  justify-around items-center">
                        <img src={avatarimg2} alt="" />
                        <p className=" font-light text-[9px]  font-poppins text-[#9E9E9E] ">
                          min price
                        </p>
                        <p className=" font-light text-[9px]  font-poppins text-primary ">
                          1200 $
                        </p>
                      </div>
                    </div>
                    <div className=" w-full space-y-[3px]">
                      <div className=" w-full h-[1px] bg-[#F5F5F5]" />
                      <div className=" flex w-full justify-between">
                        <p className=" font-light text-[9px] font-poppins text-[#9E9E9E] ">
                          Engagement rate
                        </p>
                        <p className=" font-light text-[9px]  font-poppins text-primary ">
                          47.84%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" mt-32   w-[70%] ml-16">
                  <p className=" font-normal text-[20px]  font-poppins text-primary mb-5 ">
                    improved customer service
                  </p>
                  <p className=" font-light text-[14px]  font-poppins text-primary ">
                    Analytics helps optimize service process, by providing
                    information on how to imporove interactions with customers
                    and help increase their satisfaction
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-[50%] h-auto  bg-[#F9F9F9] rounded-2xl   border-[1px] border-[#EEEEEE]  flex flex-col items-center py-5 ">
              <div className=" w-full flex  justify-center flex-col items-center   ">
                <div className=" w-[55%] h-auto bg-white  p-5 space-y-3 rounded-lg border-[1px] border-[#F5F5F5] flex space-x-3  "></div>
                <div className=" w-[60%] h-auto bg-white  p-5 space-y-3 rounded-lg border-[1px] border-[#F5F5F5] flex space-x-3 relative bottom-5 ">
                  <div className=" flex space-x-1">
                    <div className=" w-4 h-4 border-[1px] border-[#E0E0E0] bg-[#F5F5F5] rounded-sm flex items-center justify-center">
                      <AiOutlineShareAlt className=" text-1 text-[#424242]" />
                    </div>
                    <div>
                      <p className=" font-light text-[11px]  font-poppins text-primary ">
                        Finance Report
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" w-[65%] h-auto bg-white  p-5 space-y-3 rounded-lg border-[1px] border-[#F5F5F5] flex space-x-3 z-50 relative bottom-9">
                  <div className=" w-40% space-y-12">
                    <div className=" flex space-x-1">
                      <div className=" w-4 h-4 border-[1px] border-[#424242]">
                        <MdInsights className=" text-3 text-[#424242]" />
                      </div>
                      <div>
                        <p className=" font-light text-[11px]  font-poppins text-primary ">
                          Insights
                        </p>
                      </div>
                    </div>
                    <div className=" flex flex-col items-start space-y-3">
                      <p className=" font-light text-[12px]  font-poppins text-[#9E9E9E] ">
                        Total Profit
                      </p>
                      <p className=" font-light text-[25px]  font-poppins text-primary ">
                        <span className=" text-[15px]">$ </span>264,2K
                      </p>
                      <div className=" bg-[#FFD028] w-28 h-8 rounded-lg flex items-center justify-center p-1 ">
                        <p className=" font-light text-[10px]  font-poppins text-primary ">
                          Data visualization
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" w-[60%]  absolute bottom-[-17px] left-[110px]">
                    <div className="flex flex-col justify-center items-center h-full pt-5 w-ful  ">
                      <HeightBar />
                    </div>
                  </div>
                </div>
              </div>

              <div className=" mt-18   w-[65%] ml-16">
                <p className=" font-normal text-[20px]  font-poppins text-primary mb-5 ">
                  Monitoring Key Indicator
                </p>
                <p className=" font-light text-[14px]  font-poppins text-primary ">
                  Analytics platform allow business to track KPIs. An important
                  tools for measuring success and achieving goals
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className=" w-full  flex  flex-col items-center mt-10 mb-16 ">
          <div>
            <img src={redLogo} alt="" width={120} height={120} />
          </div>
          <div>
            <p className=" font-normal text-[100px]  font-poppins text-primary ">
              Get Started
            </p>
          </div>
          <div className=" w-[60%]">
            <p className=" font-light text-[20px]  font-poppins text-[#9E9E9E] ">
              Turning Information into Advantage ! start using Ramos Today. Sign
              up for a free trial
            </p>
          </div>
          <div className=" flex space-x-3 mt-10">
            <div className=" w-44 h-12 bg-[#F2F2F2] flex items-center justify-center rounded-2xl">
              <p className=" font-light text-[14px]  font-poppins text-[#424242] ">
                Request a demo
              </p>
            </div>
            <div className=" w-44 h-12 bg-[#FD4A22] flex items-center justify-center rounded-2xl">
              <p className=" font-light text-[14px]  font-poppins text-white ">
                Start for Free
              </p>
            </div>
          </div>
        </section>
        <section className=" w-full bg-[#0D0D0D]  font-poppins rounded-b-xl px-7 py-20">
          <div className=" flex w-full justify-between items-center">
            <div className=" flex space-x-10  text-gray">
              <p className=" font-light text-[14px]">About</p>
              <p className=" font-light text-[14px]">Why Us</p>
              <p className=" font-light text-[14px]">Platform</p>
              <p className=" font-light text-[14px]">Pricing</p>
              <p className=" font-light text-[14px]">Contacts</p>
            </div>
            <div>
              <h1 className=" text-white font-light text-5xl">
                hello@ramos.com
              </h1>
            </div>
          </div>
          <div className=" w-full h-[0.5px] bg-[#F5F5F5] my-16" />
          <div className=" flex justify-between items-center">
            <div className=" flex space-x-28">
              <div className=" text-left space-y-2">
                <p className=" text-white font-light text-base">
                  Warrensville Heights
                </p>
                <p className=" font-extralight text-[14px] text-gray">
                  14418 vineyard drive, NC
                </p>
                <p className=" font-extralight text-[14px] text-gray">44128</p>
              </div>
              <div className=" text-left space-y-2">
                <p className=" text-white font-light text-base">Saint Louis</p>
                <p className=" font-extralight text-[14px] text-gray">
                  1366 pen street
                </p>
                <p className=" font-extralight text-[14px] text-gray">63101</p>
              </div>
            </div>
            <div className=" space-y-5">
              <p className=" font-light text-[22px] text-gray">Linkdin</p>
              <p className=" font-light text-[22px] text-gray">Instagram</p>
              <p className=" font-light text-[22px] text-gray">Facebook</p>
            </div>
          </div>
          <div className=" w-full flex justify-between items-center mt-[40px]">
            <div className=" flex w-[50%]  ">
              <h1 className=" text-white font-medium text-9xl">Ramos</h1>
              <div className="text-white font-bold text-[19px] w-12 h-12 rounded-full border-white border-[6px] flex items-center justify-center">
                R
              </div>
            </div>
            <div>
              <p className=" font-extralight text-[16px] text-gray">
                Policy Privacy
              </p>
            </div>
            <div>
              <p className=" font-extralight text-[16px] text-gray">
                Lincense agreement
              </p>
            </div>
            <div>
              <img src={QrCode} alt="" width={150} height={150} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
