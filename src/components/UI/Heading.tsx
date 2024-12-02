import { FC, ReactNode } from 'react';
import { Text } from "@consta/uikit/Text";


interface HeadingProps {
    children: ReactNode
}


const Heading: FC<HeadingProps> = ({children}) => {
    return (
        <Text
            align="center"
            size="3xl"
            weight="bold"
            style={{marginTop: "2vh", marginBottom: "2vh"}}
        >
            {children}
        </Text>
    )
};


export default Heading;
