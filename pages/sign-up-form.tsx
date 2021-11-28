import React from "react";
import tw, { css } from "twin.macro";
import { useForm, SubmitHandler } from "react-hook-form";
import ErrorMessage from "../components/error-message";
import get from "lodash/get";

const countyOptions = [
  {
    id: 1,
    name: "Bungoma",
  },

  {
    id: 2,
    name: "Kericho",
  },
];

const subCountyOptions = [
  {
    id: 1,
    name: "Bumula",
  },

  {
    id: 2,
    name: "Bungoma Central",
  },

  {
    id: 3,
    name: "Buret",
  },

  {
    id: 4,
    name: "Kericho East",
  },
];

interface IFormInput {
  county: string;
  subCounty: string;
}

const SignUpForm = () => {
  const {
    register,
    formState: { errors, isDirty, isValid },
    handleSubmit,
  } = useForm<IFormInput>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      css={[
        tw`w-full pt-5`,
        css`
          @media screen and (min-width: 768px) {
            display: flex;
            width: 100%;
            justify-content: center;
            align-content: center;
            align-items: center;
          }
        `,
      ]}
    >
      <div tw="p-5 md:w-1/4">
        <p tw="font-medium  mb-2 block text-lg">
          Find the best priced inputs near your farm
        </p>
        <p tw="font-normal  block text-sm mb-2">
          {`Share your farm's location and we'll show you trustworthy, Wefarm
        agrovets if they're nearby`}
        </p>
        <div>
          <label htmlFor="county" tw="font-medium  mb-1 block text-sm">
            County
          </label>
          <select
            name="county"
            defaultValue=""
            ref={register({
              required: {
                value: true,
                message: "Please select a county",
              },
            })}
            tw="w-full text-sm border rounded border-greys-100 py-2 px-2.5"
          >
            <option value="" disabled aria-label="Select county">
              Please Choose
            </option>
            {countyOptions.map((option) => (
              <option key={option.id} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>

          <ErrorMessage message={get(errors, "county.message")} />

          <label htmlFor="subcounty" tw="font-medium  mb-1 block text-sm">
            {`Sub county (optional)`}
          </label>
          <select
            name="subCounty"
            defaultValue=""
            ref={register({
              required: {
                value: true,
                message: "Please select a sub county",
              },
            })}
            tw="w-full text-sm border rounded border-greys-100 py-2 px-2.5"
          >
            <option value="" disabled aria-label="Select county">
              Please Choose
            </option>
            {subCountyOptions.map((option) => (
              <option key={option.id} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>

          <ErrorMessage message={get(errors, "subCounty.message")} />
        </div>

        <button
          type="submit"
          tw="w-full py-1 mb-8 m-auto text-white rounded-md bg-greens-100  mt-5 text-sm shadow "
        >
          Finish
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
