import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={clsx(
        'py-3 px-4 bg-cyan-500 rounded font-semibold text-gray-900 text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',
        props.className,
      )}
      {...props}
    >
      {props.children}
    </button>
  );
};
