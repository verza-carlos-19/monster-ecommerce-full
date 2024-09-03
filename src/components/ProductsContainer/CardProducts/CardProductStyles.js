import { motion } from "framer-motion";
import { styled } from "styled-components";

export const CardContainer = styled(motion.article)`
  position: relative;
  width: 350px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: end;
  padding: 5%;

  .card-white {
    width: 190px;
    height: 254px;
    background: rgba(37, 37, 37, 0.219);
    box-shadow: inset 0 0 3.5rem black, 0 0 1rem rgba(255, 255, 255, 0.363);
    backdrop-filter: blur(3px);
    border: 2px solid white;
    display: flex;
    border-radius: 5px;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 2%;
    position: relative;
    transition: all 0.6s ease-in-out;
  }
  .card-white::before {
    width: 90%;
    height: 90%;
    content: "";
    position: absolute;
    border-top: 2px solid white;
    border-left: 2px solid white;
    top: -10px;
    left: -14px;
    transition: all 0.6s ease-in-out;
    border-color: white;
    /* box-shadow: 0 -.5rem 1rem -1rem rgb(255, 217, 47), -1rem -1rem 1rem -1rem rgb(255, 217, 47), -.5rem 0rem 1rem -1rem rgb(255, 217, 47), inset .8rem 1.1rem 1rem -1.5rem rgb(255, 217, 47); */
  }
  .card-white::after {
    width: 90%;
    height: 90%;
    content: "";
    position: absolute;
    border-bottom: 2px solid white;
    border-right: 2px solid white;
    border-color: white;
    top: 32px;
    left: 30px;
    transition: all 0.6s ease-in-out;
  }
  .card-red {
    width: 190px;
    height: 254px;
    background: rgba(37, 37, 37, 0.219);
    box-shadow: inset 0 0 3.5rem black, 0 0 1rem rgba(255, 106, 47, 0.6);
    backdrop-filter: blur(3px);
    border: 2px solid rgb(255, 106, 47);
    display: flex;
    border-radius: 5px;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 2%;
    position: relative;
    transition: all 0.6s ease-in-out;
  }
  .card-red::before {
    width: 90%;
    height: 90%;
    content: "";
    position: absolute;
    border-top: 2px solid white;
    border-left: 2px solid white;
    top: -10px;
    left: -14px;
    transition: all 0.6s ease-in-out;
    border-color: rgb(255, 172, 47);
    /* box-shadow: 0 -.5rem 1rem -1rem rgb(255, 217, 47), -1rem -1rem 1rem -1rem rgb(255, 217, 47), -.5rem 0rem 1rem -1rem rgb(255, 217, 47), inset .8rem 1.1rem 1rem -1.5rem rgb(255, 217, 47); */
  }
  .card-red::after {
    width: 90%;
    height: 90%;
    content: "";
    position: absolute;
    border-bottom: 2px solid white;
    border-right: 2px solid white;
    border-color: rgb(255, 106, 47);
    top: 32px;
    left: 30px;
    transition: all 0.6s ease-in-out;
  }

  .card-blue {
    width: 190px;
    height: 254px;
    background: rgba(37, 37, 37, 0.219);
    box-shadow: inset 0 0 3.5rem black, 0 0 1rem rgba(47, 154, 255, 0.4);
    backdrop-filter: blur(3px);
    border: 2px solid cyan;
    display: flex;
    border-radius: 5px;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 2%;
    position: relative;
    transition: all 0.6s ease-in-out;
  }
  .card-blue::before {
    width: 90%;
    height: 90%;
    content: "";
    position: absolute;
    border-top: 2px solid white;
    border-left: 2px solid white;
    top: -10px;
    left: -14px;
    transition: all 0.6s ease-in-out;
    border-color: rgb(47, 154, 255);
    /* box-shadow: 0 -.5rem 1rem -1rem rgb(255, 217, 47), -1rem -1rem 1rem -1rem rgb(255, 217, 47), -.5rem 0rem 1rem -1rem rgb(255, 217, 47), inset .8rem 1.1rem 1rem -1.5rem rgb(255, 217, 47); */
  }
  .card-blue::after {
    width: 90%;
    height: 90%;
    content: "";
    position: absolute;
    border-bottom: 2px solid white;
    border-right: 2px solid white;
    border-color: rgb(95, 28, 250);
    top: 32px;
    left: 30px;
    transition: all 0.6s ease-in-out;
  }

  .card {
    width: 190px;
    height: 254px;
    background: rgba(37, 37, 37, 0.219);
    box-shadow: inset 0 0 3.5rem black, 0 0 1rem rgba(172, 255, 47, 0.507);
    backdrop-filter: blur(3px);
    border: 2px solid greenyellow;
    display: flex;
    border-radius: 5px;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 2%;
    position: relative;
    transition: all 0.6s ease-in-out;
  }
  .card::before {
    width: 90%;
    height: 90%;
    content: "";
    position: absolute;
    border-top: 2px solid white;
    border-left: 2px solid white;
    top: -10px;
    left: -14px;
    transition: all 0.6s ease-in-out;
    border-color: rgb(255, 217, 47);
    /* box-shadow: 0 -.5rem 1rem -1rem rgb(255, 217, 47), -1rem -1rem 1rem -1rem rgb(255, 217, 47), -.5rem 0rem 1rem -1rem rgb(255, 217, 47), inset .8rem 1.1rem 1rem -1.5rem rgb(255, 217, 47); */
  }
  .card::after {
    width: 90%;
    height: 90%;
    content: "";
    position: absolute;
    border-bottom: 2px solid white;
    border-right: 2px solid white;
    border-color: greenyellow;
    top: 32px;
    left: 30px;
    transition: all 0.6s ease-in-out;
  }

  .image {
    /* display: none; */
    position: absolute;
    height: 135%;
    animation: float 2s infinite ease-in-out;
    transition: all 0.6s ease-in-out;
    z-index: 3;
    top: -95px;
    left: 25px;
    filter: drop-shadow(0 0 0 black) saturate(1.3);
  }
  .card-red > .image {
    animation: float 2.5s infinite ease-in-out;
  }
  .card-blue > .image {
    animation: float 3s infinite ease-in-out;
  }

  .price {
    /* position: absolute; */
    /* display: none; */
    /* transition: all .6s ease-in-out; */
    position: absolute;
    /* display: none; */
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    bottom: 35%;
    right: -80%;

    color: white;
    font-weight: 700;
    font-size: 45px;
    transition: transform 0.3s 0.5s ease, opacity 1.7s ease-in-out;
    transform: scaleX(0);
    opacity: 0;
    rotate: 90deg;
    transform-origin: left;
    text-align: center;
    transition: all 0.1s 0.1s ease-in;
  }
  .simbol {
    font-size: 80px;
  }
  .title {
    position: absolute;
    /* display: none; */
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    bottom: 53%;
    right: -170%;
    width: 210px;
    color: white;
    font-weight: 700;
    font-size: 23px;
    transform: scaleX(0);
    opacity: 0;
    rotate: 90deg;
    transform-origin: left;
    text-align: center;
    transition: all 0.1s 0.1s ease-in;
    filter: drop-shadow(0 0 1rem rgba(255, 255, 255, 0.356));
  }
  .button {
    transition: transform 0.3s 0.8s ease, opacity 1.7s ease-in-out,
      border 0.3s ease-out;
    transform-origin: top;
    transform: scaleY(0);
    rotate: 90deg;
    position: relative;
    /* display: none; */
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    font-weight: 500;
    background-color: rgba(255, 255, 255, 0);
    color: white;
    border: none;
    border-right: 2px solid transparent;
    border-bottom: 2px solid rgba(255, 255, 255, 0);
    border-left: 2px solid rgba(255, 255, 255, 0);
    border-top: 2px solid transparent;
    bottom: 20%;
    left: -10%;
    padding: 0.3rem 2rem;
    /* backdrop-filter: blur(8px); */
    z-index: 5;
    transition: all 0.1s 0.1s ease-in;
    filter: drop-shadow(0 0 3rem white);
  }
  .card .buttonsp {
    position: absolute;
    /* padding: .3rem 2rem; */
    width: 100%;
    height: 100%;
    /* background-color: aliceblue; */
    top: 0;
    left: 0;
    /* border: 1px solid; */
  }
  .card .buttonsp::before {
    content: "";
    width: 30%;
    height: 50%;
    position: absolute;
    border-bottom: 2px solid white;
    border-left: 2px solid white;
    border-color: greenyellow;
    border-right: 2px solid transparent;
    border-top: 2px solid transparent;
    left: 0;
    bottom: 0;
    /* transition: all .5s cubic-bezier(0.55, 0.055, 0.675, 0.19); */
    transition: all 0.5s ease;
  }
  .card .buttonsp::after {
    content: "";
    width: 30%;
    height: 50%;
    position: absolute;
    border-top: 2px solid white;
    border-right: 2px solid white;
    border-color: rgb(255, 217, 47);
    border-bottom: 2px solid transparent;
    border-left: 2px solid transparent;
    top: 0;
    right: 0;
    /* transition: all .5s cubic-bezier(0.55, 0.055, 0.675, 0.19); */
    transition: all 0.5s ease;
  }

  .card .button:hover > .buttonsp::after {
    width: 12%;
    height: 45%;
    top: 0;
    right: 121px;
    rotate: -90deg;
  }
  .card .button:hover > .buttonsp::before {
    width: 12%;
    height: 45%;
    bottom: 0px;
    left: 121px;
    rotate: -90deg;
  }

  .card .button::before {
    position: absolute;
    border-right: 1px solid white;
    /* border-bottom: 1px solid rgba(255, 255, 255, 0);
border-left: 1px solid rgba(255, 255, 255, 0); */
    border-top: 1px solid white;
    content: "";
    width: 25%;
    height: 55%;
    right: -7px;
    top: -7px;
    z-index: 5;
  }
  .card .button::before {
    z-index: -1;
    position: absolute;
    border-right: 2px solid white;
    /* border-bottom: 1px solid rgba(255, 255, 255, 0);
border-left: 1px solid rgba(255, 255, 255, 0); */
    border-top: 2px solid white;
    border-color: greenyellow;
    content: "";
    width: 25%;
    height: 55%;
    right: -7px;
    top: -7px;
    transition: all 0.5s ease-in-out;
  }
  .card .button::after {
    position: absolute;
    border-left: 2px solid white;
    /* border-top: 1px solid rgba(255, 255, 255, 0);
border-right: 1px solid rgba(255, 255, 255, 0); */
    border-bottom: 2px solid white;
    transition: all 0.5s ease-in-out;
    content: "";
    border-color: lightcoral;
    width: 25%;
    height: 55%;
    left: -7px;
    bottom: -7px;
    z-index: -2;
    border-color: rgb(255, 217, 47);
  }
  .card .button:hover::after {
    rotate: 180deg;
    left: 112px;
    bottom: 20px;
  }
  .card .button:hover::before {
    rotate: 180deg;
    right: 112px;
    top: 20px;

    /* border-color: rgb(255, 217, 47); */
  }
  .card .textbtn {
    position: relative;
  }
  .card .textbtn::after {
    content: "";
    width: 100%;
    height: 2px;
    background: greenyellow;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all 0.3s ease-in-out;
    transform: scaleX(0);
    transform-origin: left;
  }
  .card .button:hover > .textbtn::after {
    transform: scaleX(1);
  }
  .card .button:hover {
    /* border-left: 2px solid white;
border-top: 2px solid rgba(255, 255, 255, 0);
border-right: 2px solid rgba(255, 255, 255, 0);
border-bottom: 2px solid white; */
    /* text-decoration: underline;
text-decoration-color: rgba(172, 255, 47, 0.473); */
    filter: drop-shadow(0 0 3rem rgba(172, 255, 47, 0.507));
    transition: all 0.5s ease-in;
  }

  .card-red .buttonsp {
    position: absolute;
    /* padding: .3rem 2rem; */
    width: 100%;
    height: 100%;
    /* background-color: aliceblue; */
    top: 0;
    left: 0;
    /* border: 1px solid; */
  }
  .card-red .buttonsp::before {
    content: "";
    width: 30%;
    height: 50%;
    position: absolute;
    border-bottom: 2px solid white;
    border-left: 2px solid white;
    border-color: rgb(255, 172, 47);
    border-right: 2px solid transparent;
    border-top: 2px solid transparent;
    left: 0;
    bottom: 0;
    /* transition: all .5s cubic-bezier(0.55, 0.055, 0.675, 0.19); */
    transition: all 0.5s ease;
  }
  .card-red .buttonsp::after {
    content: "";
    width: 30%;
    height: 50%;
    position: absolute;
    border-top: 2px solid white;
    border-right: 2px solid white;
    border-color: rgb(255, 106, 47);
    border-bottom: 2px solid transparent;
    border-left: 2px solid transparent;
    top: 0;
    right: 0;
    /* transition: all .5s cubic-bezier(0.55, 0.055, 0.675, 0.19); */
    transition: all 0.5s ease;
  }

  .card-red .button:hover > .buttonsp::after {
    width: 12%;
    height: 45%;
    top: 0;
    right: 121px;
    rotate: -90deg;
  }
  .card-red .button:hover > .buttonsp::before {
    width: 12%;
    height: 45%;
    bottom: 0px;
    left: 121px;
    rotate: -90deg;
  }
  .card-red .button::before {
    z-index: -1;
    position: absolute;
    border-right: 2px solid white;
    /* border-bottom: 1px solid rgba(255, 255, 255, 0);
border-left: 1px solid rgba(255, 255, 255, 0); */
    border-top: 2px solid white;
    border-color: rgb(255, 172, 47);
    content: "";
    width: 25%;
    height: 55%;
    right: -7px;
    top: -7px;
    transition: all 0.5s ease-in-out;
  }
  .card-red .button::after {
    position: absolute;
    border-left: 2px solid white;
    /* border-top: 1px solid rgba(255, 255, 255, 0);
border-right: 1px solid rgba(255, 255, 255, 0); */
    border-bottom: 2px solid white;
    transition: all 0.5s ease-in-out;
    content: "";
    border-color: rgb(255, 106, 47);
    width: 25%;
    height: 55%;
    left: -7px;
    bottom: -7px;
    z-index: -2;
    border-color: rgb(255, 217, 47);
  }
  .card-red .button:hover::after {
    rotate: 180deg;
    left: 112px;
    bottom: 20px;
  }
  .card-red .button:hover::before {
    rotate: 180deg;
    right: 112px;
    top: 20px;

    /* border-color: rgb(255, 217, 47); */
  }
  .card-red .textbtn {
    position: relative;
  }
  .card-red .textbtn::after {
    content: "";
    width: 100%;
    height: 1px;
    background: rgb(255, 106, 47);
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all 0.3s ease-in-out;
    transform: scaleX(0);
    transform-origin: left;
  }
  .card-red .button:hover > .textbtn::after {
    transform: scaleX(1);
  }
  .card-red .button:hover {
    /* border-left: 2px solid white;
border-top: 2px solid rgba(255, 255, 255, 0);
border-right: 2px solid rgba(255, 255, 255, 0);
border-bottom: 2px solid white; */
    /* text-decoration: underline;
text-decoration-color: rgba(172, 255, 47, 0.473); */
    filter: drop-shadow(0 0 3rem rgba(255, 106, 47, 0.507));
    transition: all 0.5s ease-in;
  }

  .card-blue .buttonsp {
    position: absolute;
    /* padding: .3rem 2rem; */
    width: 100%;
    height: 100%;
    /* background-color: aliceblue; */
    top: 0;
    left: 0;
    /* border: 1px solid; */
  }
  .card-blue .buttonsp::before {
    content: "";
    width: 30%;
    height: 50%;
    position: absolute;
    border-bottom: 2px solid white;
    border-left: 2px solid white;
    border-color: cyan;
    border-right: 2px solid transparent;
    border-top: 2px solid transparent;
    left: 0;
    bottom: 0;
    /* transition: all .5s cubic-bezier(0.55, 0.055, 0.675, 0.19); */
    transition: all 0.5s ease;
  }
  .card-blue .buttonsp::after {
    content: "";
    width: 30%;
    height: 50%;
    position: absolute;
    border-top: 2px solid white;
    border-right: 2px solid white;
    border-color: blueviolet;
    border-bottom: 2px solid transparent;
    border-left: 2px solid transparent;
    top: 0;
    right: 0;
    /* transition: all .5s cubic-bezier(0.55, 0.055, 0.675, 0.19); */
    transition: all 0.5s ease;
  }
  .card-blue .button:hover > .buttonsp::after {
    width: 12%;
    height: 45%;
    top: 0;
    right: 121px;
    rotate: -90deg;
    /* border-color: cyan; */
  }
  .card-blue .button:hover > .buttonsp::before {
    width: 12%;
    height: 45%;
    bottom: 0px;
    left: 121px;
    rotate: -90deg;
    /* border-color: blueviolet; */
  }
  .card-blue .button::before {
    z-index: -1;
    position: absolute;
    border-right: 2px solid white;
    /* border-bottom: 1px solid rgba(255, 255, 255, 0);
border-left: 1px solid rgba(255, 255, 255, 0); */
    border-top: 2px solid white;
    border-color: cyan;
    content: "";
    width: 25%;
    height: 55%;
    right: -7px;
    top: -7px;
    transition: all 0.5s ease-in-out;
  }
  .card-blue .button::after {
    position: absolute;
    border-left: 2px solid white;
    /* border-top: 1px solid rgba(255, 255, 255, 0);
border-right: 1px solid rgba(255, 255, 255, 0); */
    border-bottom: 2px solid white;
    transition: all 0.5s ease-in-out;
    content: "";
    border-color: rgb(255, 106, 47);
    width: 25%;
    height: 55%;
    left: -7px;
    bottom: -7px;
    z-index: -2;
    border-color: blueviolet;
  }
  .card-blue .button:hover::after {
    rotate: 180deg;
    left: 112px;
    bottom: 20px;
    border-color: cyan;
  }
  .card-blue .button:hover::before {
    rotate: 180deg;
    right: 112px;
    top: 20px;

    border-color: blueviolet;
  }
  .card-blue .textbtn {
    position: relative;
  }
  .card-blue .textbtn::after {
    content: "";
    width: 100%;
    height: 2px;
    background: blueviolet;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all 0.3s ease-in-out;
    transform: scaleX(0);
    transform-origin: left;
  }
  .card-blue .button:hover > .textbtn::after {
    transform: scaleX(1);
  }
  .card-blue .button:hover {
    /* border-left: 2px solid white;
border-top: 2px solid rgba(255, 255, 255, 0);
border-right: 2px solid rgba(255, 255, 255, 0);
border-bottom: 2px solid white; */
    /* text-decoration: underline;
text-decoration-color: rgba(172, 255, 47, 0.473); */
    filter: drop-shadow(0 0 3rem rgba(172, 205, 255, 0.507));
    transition: all 0.5s ease-in;
  }

  .card-white .buttonsp {
    position: absolute;
    /* padding: .3rem 2rem; */
    width: 100%;
    height: 100%;
    /* background-color: aliceblue; */
    top: 0;
    left: 0;
    /* border: 1px solid; */
  }
  .card-white .buttonsp::before {
    content: "";
    width: 30%;
    height: 50%;
    position: absolute;
    border-bottom: 2px solid white;
    border-left: 2px solid white;
    border-color: white;
    border-right: 2px solid transparent;
    border-top: 2px solid transparent;
    left: 0;
    bottom: 0;
    /* transition: all .5s cubic-bezier(0.55, 0.055, 0.675, 0.19); */
    transition: all 0.5s ease;
  }
  .card-white .buttonsp::after {
    content: "";
    width: 30%;
    height: 50%;
    position: absolute;
    border-top: 2px solid white;
    border-right: 2px solid white;
    border-color: white;
    border-bottom: 2px solid transparent;
    border-left: 2px solid transparent;
    top: 0;
    right: 0;
    /* transition: all .5s cubic-bezier(0.55, 0.055, 0.675, 0.19); */
    transition: all 0.5s ease;
  }
  .card-white .button:hover > .buttonsp::after {
    width: 12%;
    height: 45%;
    top: 0;
    right: 121px;
    rotate: -90deg;
    /* border-color: cyan; */
  }
  .card-white .button:hover > .buttonsp::before {
    width: 12%;
    height: 45%;
    bottom: 0px;
    left: 121px;
    rotate: -90deg;
    /* border-color: blueviolet; */
  }
  .card-white .button::before {
    z-index: -1;
    position: absolute;
    border-right: 2px solid white;
    /* border-bottom: 1px solid rgba(255, 255, 255, 0);
border-left: 1px solid rgba(255, 255, 255, 0); */
    border-top: 2px solid white;
    border-color: white;
    content: "";
    width: 25%;
    height: 55%;
    right: -7px;
    top: -7px;
    transition: all 0.5s ease-in-out;
  }
  .card-white .button::after {
    position: absolute;
    border-left: 2px solid white;
    /* border-top: 1px solid rgba(255, 255, 255, 0);
border-right: 1px solid rgba(255, 255, 255, 0); */
    border-bottom: 2px solid white;
    transition: all 0.5s ease-in-out;
    content: "";
    border-color: whitesmoke;
    width: 25%;
    height: 55%;
    left: -7px;
    bottom: -7px;
    z-index: -2;
    border-color: whitesmoke;
  }
  .card-white .button:hover::after {
    rotate: 180deg;
    left: 112px;
    bottom: 20px;
    border-color: whitesmoke;
  }
  .card-white .button:hover::before {
    rotate: 180deg;
    right: 112px;
    top: 20px;

    border-color: white;
  }
  .card-white .textbtn {
    position: relative;
  }
  .card-white .textbtn::after {
    content: "";
    width: 100%;
    height: 2px;
    background: whitesmoke;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all 0.5s ease-in-out;
    transform: scaleX(0);
    transform-origin: left;
  }
  .card-white .button:hover > .textbtn::after {
    transform: scaleX(1);
  }
  .card-white .button:hover {
    /* border-left: 2px solid white;
border-top: 2px solid rgba(255, 255, 255, 0);
border-right: 2px solid rgba(255, 255, 255, 0);
border-bottom: 2px solid white; */
    /* text-decoration: underline;
text-decoration-color: rgba(172, 255, 47, 0.473); */
    filter: drop-shadow(0 0 3rem rgba(255, 255, 255, 0.507));
    transition: all 0.5s ease-in;
  }

  .card:hover {
    height: 300px;
    width: 150px;
    rotate: -90deg;
    padding-bottom: 0;
    background-color: rgba(0, 0, 0, 0.473);
    box-shadow: inset 0 0 5rem black, 0 0 0.6rem white;
  }
  .card-white:hover {
    height: 300px;
    width: 150px;
    rotate: -90deg;
    padding-bottom: 0;
    background-color: rgba(0, 0, 0, 0.473);
    box-shadow: inset 0 0 5rem black, 0 0 0.6rem white;
  }
  &:hover > .card-white {
    height: 300px;
    width: 150px;
    rotate: -90deg;
    padding-bottom: 0;
  }
  &:hover > .card-white::before {
    width: 20%;
    height: 90%;
    top: -18px;
    left: -15px;
    border-color: white;
    /* box-shadow: 0 -1rem 1rem -1rem greenyellow, -1.1rem -1.1rem 1rem -1rem greenyellow, -2.1rem 2rem .5rem -1.9rem greenyellow,-2.1rem 2rem .5rem -1.9rem greenyellow,-2.1rem 2rem .5rem -1.9rem greenyellow,-1rem .8rem 1rem -1.5rem greenyellow,-1.1rem 0.5rem .5rem -1rem greenyellow, -.6rem 0rem 1rem -1rem greenyellow, inset 1.5rem 1.5rem .3rem -1.4rem greenyellow , 1.9rem -1.8rem .4rem -1.8rem greenyellow, 1.1rem -1.8rem .6rem -1.8rem greenyellow; */
  }
  &:hover > .card-white::after {
    border-color: white;
    width: 50%;
    height: 40%;
    top: 195px;
    left: 150px;
  }
  &:hover > .card-white > .price,
  &:hover > .card-white > .title {
    /* display: flex; */
    transform: scaleX(1);
    /* rotate: 90deg; */
    transition: all 0.1s 0.1s ease-in;
    opacity: 1;
    transition: transform 0.3s 0.5s ease, opacity 1.7s ease-in-out;
  }
  &:hover > .card-white > .button {
    transform: scaleY(1);
    /* rotate: 90deg; */
    opacity: 1;
    transition: transform 0.3s 0.8s ease, opacity 1.7s ease-in-out,
      border 0.3s ease-out;
  }
  &:hover > .card-white > .image {
    /* height: 300px;
width: 200px; */
    height: 75%;
    rotate: 90deg;
    top: -50px;
    left: 70px;
    filter: drop-shadow(0 0 0.3rem rgba(0, 0, 0, 0.568)) saturate(1.3);
    animation: float 3s infinite ease-in;
  }
  .card-blue:hover {
    height: 300px;
    width: 150px;
    rotate: -90deg;
    padding-bottom: 0;
    background-color: rgba(0, 0, 0, 0.473);
    box-shadow: inset 0 0 5rem black, 0 0 0.6rem white;
  }
  &:hover > .card-blue {
    height: 300px;
    width: 150px;
    rotate: -90deg;
    padding-bottom: 0;
  }
  &:hover > .card-blue::before {
    width: 50%;
    height: 60%;
    top: -18px;
    left: -15px;
    border-color: blueviolet;
    /* box-shadow: 0 -1rem 1rem -1rem greenyellow, -1.1rem -1.1rem 1rem -1rem greenyellow, -2.1rem 2rem .5rem -1.9rem greenyellow,-2.1rem 2rem .5rem -1.9rem greenyellow,-2.1rem 2rem .5rem -1.9rem greenyellow,-1rem .8rem 1rem -1.5rem greenyellow,-1.1rem 0.5rem .5rem -1rem greenyellow, -.6rem 0rem 1rem -1rem greenyellow, inset 1.5rem 1.5rem .3rem -1.4rem greenyellow , 1.9rem -1.8rem .4rem -1.8rem greenyellow, 1.1rem -1.8rem .6rem -1.8rem greenyellow; */
  }
  &:hover > .card-blue::after {
    border-color: cyan;
    width: 50%;
    height: 40%;
    top: 195px;
    left: 150px;
  }
  &:hover > .card-blue > .price,
  &:hover > .card-blue > .title {
    /* display: flex; */
    transform: scaleX(1);
    /* rotate: 90deg; */
    transition: all 0.1s 0.1s ease-in;
    opacity: 1;
    transition: transform 0.3s 0.5s ease, opacity 1.7s ease-in-out;
  }
  &:hover > .card-blue > .button {
    transform: scaleY(1);
    /* rotate: 90deg; */
    opacity: 1;
    transition: transform 0.3s 0.8s ease, opacity 1.7s ease-in-out,
      border 0.3s ease-out;
  }
  &:hover > .card-blue > .image {
    /* height: 300px;
width: 200px; */
    height: 75%;
    rotate: 90deg;
    top: -50px;
    left: 70px;
    filter: drop-shadow(0 0 0.3rem rgba(0, 0, 0, 0.568)) saturate(1.3);
    animation: float 3s infinite ease-in;
  }
  .card-red:hover {
    height: 300px;
    width: 150px;
    rotate: -90deg;
    padding-bottom: 0;
    background-color: rgba(0, 0, 0, 0.473);
    box-shadow: inset 0 0 5rem black, 0 0 0.6rem white;
  }
  &:hover > .card-red {
    height: 300px;
    width: 150px;
    rotate: -90deg;
    padding-bottom: 0;
  }
  &:hover > .card-red::before {
    width: 70%;
    height: 30%;
    top: -18px;
    left: -15px;
    border-color: rgb(255, 106, 47);
    /* box-shadow: 0 -1rem 1rem -1rem greenyellow, -1.1rem -1.1rem 1rem -1rem greenyellow, -2.1rem 2rem .5rem -1.9rem greenyellow,-2.1rem 2rem .5rem -1.9rem greenyellow,-2.1rem 2rem .5rem -1.9rem greenyellow,-1rem .8rem 1rem -1.5rem greenyellow,-1.1rem 0.5rem .5rem -1rem greenyellow, -.6rem 0rem 1rem -1rem greenyellow, inset 1.5rem 1.5rem .3rem -1.4rem greenyellow , 1.9rem -1.8rem .4rem -1.8rem greenyellow, 1.1rem -1.8rem .6rem -1.8rem greenyellow; */
  }
  &:hover > .card-red::after {
    border-color: rgb(255, 172, 47);
    width: 70%;
    height: 40%;
    top: 210px;
    left: 120px;
  }
  &:hover > .card-red > .price,
  &:hover > .card-red > .title {
    /* display: flex; */
    transform: scaleX(1);
    /* rotate: 90deg; */
    transition: all 0.1s 0.1s ease-in;
    opacity: 1;
    transition: transform 0.3s 0.5s ease, opacity 1.7s ease-in-out;
  }
  &:hover > .card-red > .button {
    transform: scaleY(1);
    /* rotate: 90deg; */
    opacity: 1;
    transition: transform 0.3s 0.8s ease, opacity 1.7s ease-in-out,
      border 0.3s ease-out;
  }
  &:hover > .card-red > .image {
    /* height: 300px;
width: 200px; */
    height: 75%;
    rotate: 90deg;
    top: -50px;
    left: 70px;
    filter: drop-shadow(0 0 0.3rem rgba(0, 0, 0, 0.568)) saturate(1.3);
    animation: float 3s infinite ease-in;
  }
  &:hover > .card {
    height: 300px;
    width: 150px;
    rotate: -90deg;
    padding-bottom: 0;
  }
  &:hover > .card::before {
    width: 50%;
    height: 20%;
    top: -18px;
    left: -15px;
    border-color: greenyellow;
    /* box-shadow: 0 -1rem 1rem -1rem greenyellow, -1.1rem -1.1rem 1rem -1rem greenyellow, -2.1rem 2rem .5rem -1.9rem greenyellow,-2.1rem 2rem .5rem -1.9rem greenyellow,-2.1rem 2rem .5rem -1.9rem greenyellow,-1rem .8rem 1rem -1.5rem greenyellow,-1.1rem 0.5rem .5rem -1rem greenyellow, -.6rem 0rem 1rem -1rem greenyellow, inset 1.5rem 1.5rem .3rem -1.4rem greenyellow , 1.9rem -1.8rem .4rem -1.8rem greenyellow, 1.1rem -1.8rem .6rem -1.8rem greenyellow; */
  }
  &:hover > .card::after {
    border-color: rgb(255, 217, 47);
    width: 50%;
    height: 40%;
    top: 195px;
    left: 150px;
  }
  &:hover > .card > .price,
  &:hover > .card > .title {
    /* display: flex; */
    transform: scaleX(1);
    /* rotate: 90deg; */
    transition: all 0.1s 0.1s ease-in;
    opacity: 1;
    transition: transform 0.3s 0.5s ease, opacity 1.7s ease-in-out;
  }
  &:hover > .card > .button {
    transform: scaleY(1);
    /* rotate: 90deg; */
    opacity: 1;
    transition: transform 0.3s 0.8s ease, opacity 1.7s ease-in-out,
      border 0.3s ease-out;
  }
  &:hover > .card > .image {
    /* height: 300px;
width: 200px; */
    height: 75%;
    rotate: 90deg;
    top: -50px;
    left: 70px;
    filter: drop-shadow(0 0 0.3rem rgba(0, 0, 0, 0.568)) saturate(1.3);
    animation: float 3s infinite ease-in;
  }
  @keyframes float {
    0% {
      /* top: 0%;  */
      transform: translateY(0px);
    }
    50% {
      /* top: -1%;  */
      transform: translateY(-5px);
    }
    100% {
      /* top: 0%;  */
      transform: translateY(0px);
    }
  }
`;
export const Card = styled(motion.div)``;
