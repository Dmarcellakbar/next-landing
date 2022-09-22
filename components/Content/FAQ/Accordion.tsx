import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Box, Button, Text } from "@chakra-ui/react";


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
    <Box
      style={{
        width: "100%",
        marginBottom: "15px",
        lineHeight: "20px",
        border: "1px solid rgba(56, 176, 210, 0.3)",
        borderRadius: '6px',
      }}
    >
      <Button
        style={{
          width: "100%",
          position: "relative",
          textAlign: "left",
          padding: "16px",
          border: "none",
          background: "#01264C",
          outline: "none",
          cursor: "pointer",
          borderTopLeftRadius: '6px',
          borderTopRightRadius: '6px'

        }}
        onClick={toggle}
        type="button"
      >
        <Text>{props.title}</Text>
        {
            isShowing === props.title ?
            <ChevronUpIcon style={{float: 'right', color: '#38b0d2'}}/> :
            <ChevronDownIcon style={{float: 'right', color: '#38b0d2'}}/>
        }      
        </Button>
      <Box
        style={{ display: isShowing ? "block" : "none", padding: "16px",  background: "#01264C",}}
        dangerouslySetInnerHTML={{
          __html: props.content, 
        }}
        
      />
      <Box
        style={{ display: isShowing ? "block" : "none", padding: "16px",  background: "#01264C", }}
        dangerouslySetInnerHTML={{
          __html: props.subcontent, 
        }}
      />
      <Box
        style={{ display: isShowing ? "block" : "none", padding: "16px",  background: "#01264C", }}
        dangerouslySetInnerHTML={{
          __html: props.subcontent2, 
        }}
      />
      <Box
        style={{ display: isShowing ? "block" : "none", padding: "16px",  background: "#01264C", }}
        dangerouslySetInnerHTML={{
          __html: props.subcontent3, 
        }}
      />
      <Box
        style={{ display: isShowing ? "block" : "none", padding: "16px",  background: "#01264C", borderBottomLeftRadius: '6px', borderBottomRightRadius: '6px'}}
        dangerouslySetInnerHTML={{
          __html: props.subcontent4, 
        }}
      />
    </Box>
  );
}
