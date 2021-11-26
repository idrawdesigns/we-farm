import React from "react";
import Image from "next/image";
import tw, { css } from "twin.macro";

const SignUpPage = () => {
  return (
    <div
      css={[
        tw`w-full bg-blues-100`,
        css`
          width: 100%;
          height: 100vh;
          margin: auto;
          @media screen and (min-width: 768px) {
            width: 390px;
          }
        `,
      ]}
    >
      <div tw=" flex flex-col-reverse justify-center h-full">
        <div tw="grid grid-cols-3 gap-3 relative">
          <div tw="-ml-2">
            <Image
              width="100"
              height="200"
              alt="woman holding a phone"
              src="/images/woman-holding-phone.svg"
              layout="responsive"
            />
          </div>

          <div tw="mt-10">
            <Image
              width="100"
              height="200"
              alt="man with jembe holdomg phone"
              src="/images/man-with-jembe.svg"
              layout="responsive"
            />
          </div>

          <div tw="mt-24 right-8">
            <Image
              width="100"
              height="200"
              alt="man a holding a phone"
              src="/images/man-with-apron.svg"
              layout="responsive"
            />
          </div>

          <div tw="absolute bottom-16 -mr-8 right-2/4 h-1/5  ">
            <Image
              width="200"
              height="80"
              alt="farm icon crops"
              src="/images/we-farm-icon-crops.svg"
            />
          </div>

          <div tw="absolute top-32 right-1/4 bg-blues-200 rounded-full h-16 w-16 ">
            <Image
              width="75"
              height="85"
              alt="man a holding a phone"
              src="/images/wefarm-icon-speechbubble.svg"
            />
          </div>
        </div>

        <div tw="flex-wrap pl-5 w-full">
          <p tw="font-bold text-2xl text-white">
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

            <div
              css={[
                css`
                  border-bottom: 0.5px solid white;
                  opacity: 0.3;
                  margin: auto;
                  margin-right: 20px;
                  margin-top: 25px;
                `,
              ]}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
