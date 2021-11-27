import React from "react";
import Image from "next/image";
import tw, { css } from "twin.macro";
import { useForm, SubmitHandler } from "react-hook-form";
import get from "lodash/get";

import ErrorMessage from "../components/error-message";

import useWindow from "./hooks/use-window-size";
import { ALL } from "dns";

interface IFormInput {
  phoneNumber: number;
}

const SignUpPage = () => {
  const { isMobile } = useWindow();
  const {
    register,
    formState: { errors, isDirty, isValid },
    handleSubmit,
  } = useForm<IFormInput>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      css={[
        tw`w-full bg-blues-100`,
        css`
          width: 100%;
          height: 100vh;
          margin: auto;
          @media screen and (min-width: 768px) {
            width: 100%;
            height: 400px;
          }
        `,
      ]}
    >
      <div
        css={[
          tw`flex flex-col-reverse`,
          css`
            width: 100%;
            height: 100vh;
            justify-content: start;
            padding-top: 20px;
            @media screen and (min-width: 768px) {
              flex-direction: row;
              width: 95%;
              height: 100%;
              margin: auto;
              justify-content: center;
              align-content: center;
              align-items: center;
            }
          `,
        ]}
      >
        <div tw="grid grid-cols-3 gap-3 relative  md:mr-10">
          <div>
            <Image
              width="141"
              height="230"
              alt="woman holding a phone"
              src="/images/woman-holding-phone.svg"
              layout={isMobile ? "responsive" : "intrinsic"}
            />
          </div>

          <div tw="mt-5">
            <Image
              width="141"
              height="230"
              alt="man with jembe holdomg phone"
              src="/images/man-with-jembe.svg"
              layout={isMobile ? "responsive" : "intrinsic"}
            />
          </div>

          <div tw="mt-10  md:h-40 ">
            <Image
              width="141"
              height="230"
              alt="man a holding a phone"
              src="/images/man-with-apron.svg"
              layout={isMobile ? "responsive" : "intrinsic"}
            />
          </div>

          <div
            css={[
              tw` flex absolute top-12 right-1/4 bg-blues-200 rounded-full h-12 w-12 items-center `,
              css`
                @media screen and (min-width: 768px) {
                  display: flex;
                  justify-content: center;
                  width: 66px;
                  height: 66px;
                  margin-right: 18px;
                  margin: auto;
                  top: 50px;
                }
              `,
            ]}
          >
            <Image
              width="56"
              height="48"
              alt="we farm speech bubble"
              src="/images/wefarm-icon-speechbubble.svg"
            />
          </div>

          <div
            css={[
              tw`absolute top-40 left-1/4  rounded-full h-16 w-16 `,
              css`
                @media screen and (min-width: 768px) {
                  width: 77px;
                  height: 89px;
                  margin-right: 18px;
                  margin: auto;
                  top: 180px;
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

        <div tw="flex-wrap  p-5 md:w-1/3">
          <p tw="font-bold text-2xl text-white md:text-3xl">
            Join Wefarm: where farmers succeed together
          </p>

          <div tw="mt-7">
            <p tw="font-medium text-sm text-white mb-1">
              Your Kenyan phone number
            </p>

            <div tw="flex">
              <input
                type="number"
                name="phoneNumber"
                tw="mr-2 rounded-md p-2 w-3/4"
                ref={register({
                  pattern: {
                    value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]/,
                    message: "Your Phone Number is in valid",
                  },
                  required: {
                    value: true,
                    message: "Please enter your Phone Number",
                  },
                  minLength: {
                    value: 10,
                    message: "Your Phone Number is too short",
                  },
                  maxLength: {
                    value: 10,
                    message: "Your Phone Number is too long",
                  },
                })}
              />

              <button
                type="submit"
                tw=" flex bg-greens-100 p-2 items-center content-between text-white rounded-md"
                disabled={isDirty || !isValid}
              >
                <p tw="text-sm pr-1">Join</p>
                <Image
                  width="12"
                  height="12"
                  alt="button arrow"
                  src="/images/arrow.svg"
                />
              </button>
            </div>
            <ErrorMessage message={get(errors, "phoneNumber.message")} />

            <div tw="border-b-2 opacity-20 border-white mr-5 mt-5 md:border-0"></div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUpPage;
