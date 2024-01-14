import React from 'react';
import sprite from '../../assets/icons/icons-sprite.svg'

type PropsIconType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    style?:{
        width:string
        height:string
    }
}

export const Icon = (props: PropsIconType) => {
    return (
        <svg width={props.width || '50'} height={props.height || '50'} viewBox={props.viewBox || '0 0 50 50'} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${sprite}#${props.iconId}`}/>
        </svg>
    );
};

