import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

export default function Accordion(props: any) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
    if (isShowing !== props.title) {
      setIsShowing(props.title)
    } else {
      // setIsShowing('')
    }
  };

  return (
    <div
      style={{
        width: "100%",
        marginBottom: "15px",
        lineHeight: "20px",
        border: "1px solid rgba(56, 176, 210, 0.3)",
        borderRadius: '6px',
      }}
    >
      <Box
        style={{
          width: "100%",
          position: "relative",
          textAlign: "left",
          padding: "10px",
          border: "none",
          background: "#01264C",
          outline: "none",
          cursor: "pointer",
          borderTopLeftRadius: '6px',
          borderTopRightRadius: '6px'

        }}
        onClick={toggle}
        cursor={'pointer'}
      >
        <div>{props.title}
        {
            isShowing === props.title ?
            <ChevronUpIcon style={{float: 'right', color: '#38b0d2'}}/> :
            <ChevronDownIcon style={{float: 'right', color: '#38b0d2'}}/>
        } </div>
             
        </Box>
      <div
        style={{ display: isShowing ? "block" : "none", padding: "12px",  background: "#01264C",}}
        dangerouslySetInnerHTML={{
          __html: props.content, 
        }}
        
      />
    </div>
  );
}
