import React from 'react';
import {Icon} from "../../../../../components/icon/Icon";

type SkillPropsType = {
    info: {
        iconId: string
        width?: string
        height?: string
        viewBox?: string
    }
}
export const Skill = (props: SkillPropsType) => {
    return (
        <Icon width={props.info.width || '88'}
              height={props.info.height || '88'}
              viewBox={props.info.viewBox || '0 0 105 105'}
              iconId={props.info.iconId}/>
    );
};
