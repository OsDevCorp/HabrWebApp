import React, { FC } from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
    text: string;
    isDisabled?: boolean;
    onClickHandler?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button: FC<ButtonProps> =
    ({
         text,
         isDisabled= false,
         onClickHandler
    }) => {

    return (
        <button className={styles.button}
        onClick={onClickHandler}
        disabled={isDisabled}>
            {text}
        </button>
    );
}




