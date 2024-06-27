import { FC, PropsWithChildren } from "react";

type TypographyProps = PropsWithChildren<{ className?: string }>;

export const TypographyH1: FC<TypographyProps> = ({ children, className }) => {
  return (
    <h1
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${
        className ?? ""
      }`}
    >
      {children}
    </h1>
  );
};

export const TypographyH2: FC<TypographyProps> = ({ children }) => {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
};

export const TypographyP: FC<TypographyProps> = ({ children, className }) => {
  return (
    <p className={`leading-7 [&:not(:first-child)]:mt-6 ${className ?? ""}`}>
      {children}
    </p>
  );
};
