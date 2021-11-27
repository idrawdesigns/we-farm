import React from "react";
import tw, { css } from "twin.macro";

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
  phoneNumber: number;
}

const SignUpForm = () => {
  return (
    <div
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
            name="countyOptions"
            tw="w-full text-sm border rounded border-greys-100 py-2 px-2.5 mb-2"
          >
            <option selected disabled aria-label="Select county">
              Please Choose
            </option>
            {countyOptions.map((option) => (
              <option key={option.id} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>

          <label htmlFor="subcounty" tw="font-medium  mb-1 block text-sm">
            {`Sub county (optional)`}
          </label>
          <select
            name="countyOptions"
            tw="w-full text-sm border rounded border-greys-100 py-2 px-2.5"
          >
            {subCountyOptions.map((option) => (
              <option key={option.id} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        <button tw="w-full py-1 mb-8 m-auto text-white rounded-md bg-greens-100  mt-5 text-sm shadow ">
          Finish
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
