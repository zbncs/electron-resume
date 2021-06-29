import React from 'react';

// css
import './index.less';

interface ITitleProps {
    /**
     * 标题
     */
    text: string;
    /**
     * 样式
     */
    styles?: React.CSSProperties;
}

export default function Title(props: ITitleProps) {
    const {styles, text} = props;
    return (
        <div styleName='title' style={styles}>
            {text}
        </div>
    )
}





