"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
}

export default function PricingCard({
  title,
  price,
  features,
  buttonText,
}: PricingCardProps) {
  return (
    <div className="max-w-[20rem]">
      <Card variant="gradient" className="h-full p-8 bg-gray-400">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
        >
          <Typography
            variant="small"
            color="white"
            className="font-normal uppercase"
          >
            {title}
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="mt-6 flex justify-center gap-1 text-7xl font-normal"
          >
            <span className="mt-2 text-4xl">$</span> {price}{" "}
            <span className="self-end text-4xl">/mo</span>
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          <ul className="flex flex-col gap-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">{feature}</Typography>
              </li>
            ))}
          </ul>
        </CardBody>
        <CardFooter className="mt-12 p-0">
          <Button
            size="lg"
            color="white"
            className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
            ripple={true}
            fullWidth={true}
          >
            {buttonText}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
