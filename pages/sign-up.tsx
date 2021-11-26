import React from "react";
import Image from "next/image";
import tw, { css } from "twin.macro";
import useWindow from "./hooks/use-window-size";

const SignUpPage = () => {
  const { isMobile } = useWindow();
  return (
    <div
      css={[
        tw`w-full bg-blues-100`,
        css`
          width: 100%;
          height: 100vh;
          margin: auto;
          @media screen and (min-width: 768px) {
            width: 100%;
            height: 100vh;
          }
        `,
      ]}
    >
      <div
        css={[
          tw`flex flex-col-reverse justify-center`,
          css`
            width: 100%;
            height: 100vh;
            margin: auto;
            @media screen and (min-width: 768px) {
              flex-direction: row;
              width: 95%;
              margin: auto;
              align-items: center;
            }
          `,
        ]}
      >
        <div tw="grid grid-cols-3 gap-3 relative">
          <div>
            <Image
              width="250"
              height="600"
              alt="woman holding a phone"
              src="/images/woman-holding-phone.svg"
              layout={isMobile ? "responsive" : "intrinsic"}
            />
          </div>

          <div tw="mt-5">
            <Image
              width="250"
              height="600"
              alt="man with jembe holdomg phone"
              src="/images/man-with-jembe.svg"
              layout={isMobile ? "responsive" : "intrinsic"}
            />
          </div>

          <div tw="mt-10 right-8 md:h-40 ">
            <Image
              width="250"
              height="600"
              alt="man a holding a phone"
              src="/images/man-with-apron.svg"
              layout={isMobile ? "responsive" : "intrinsic"}
            />
          </div>

          <div
            css={[
              tw`absolute top-24 right-1/4 bg-blues-200 rounded-full h-16 w-16`,
              css`
                @media screen and (min-width: 768px) {
                  display: flex;
                  justify-content: center;
                  width: 100px;
                  height: 100px;
                  margin-right: 18px;
                  margin: auto;
                  top: 200px;
                }
              `,
            ]}
          >
            <Image
              width="90"
              height="90"
              alt="we farm speech bubble"
              src="/images/wefarm-icon-speechbubble.svg"
            />
          </div>

          <div
            css={[
              tw`absolute top-48 left-1/4  rounded-full h-16 w-16 `,
              css`
                @media screen and (min-width: 768px) {
                  width: 150px;
                  height: 100px;
                  margin-right: 18px;
                  margin: auto;
                  top: 450px;
                }
              `,
            ]}
          >
            <Image
              width="120"
              height="120"
              alt="we farm speech bubble"
              src="/images/we-farm-icon-crops.svg"
            />
          </div>
        </div>

        <div tw="flex-wrap ml-10">
          <p tw="font-bold text-2xl text-white md:text-3xl">
            Join Wefarm: where farmers succeed together
          </p>

          <div tw="mt-7">
            <p tw="font-medium text-lg text-white mb-1">
              Your Kenyan phone number
            </p>

            <div tw="flex mb-2">
              <input type="text" tw="mr-2 rounded-md p-3 w-3/4" />
              <button tw=" flex  bg-greens-100  p-2 items-center content-between text-white rounded-md ">
                <p tw="text-sm pr-1">Join</p>
                <Image
                  width="12"
                  height="12"
                  alt="button arrow"
                  src="/images/arrow.svg"
                />
              </button>
            </div>

            <div tw="border-b-2 opacity-20 border-white mr-5 md:border-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
