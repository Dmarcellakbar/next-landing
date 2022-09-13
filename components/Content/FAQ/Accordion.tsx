import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

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
        border: "1px solid rgba(56, 176, 210, 0.5)",
        borderRadius: '8px',
      }}
    >
      <button
        style={{
          width: "100%",
          position: "relative",
          textAlign: "left",
          padding: "16px",
          border: "none",
          background: "#01264C",
          outline: "none",
          cursor: "pointer",
          borderTopLeftRadius: '15px',
          borderTopRightRadius: '15px'

        }}
        onClick={toggle}
        type="button"
      >
        <p>{props.title}</p>
        {
            isShowing === props.title ?
            <ChevronUpIcon style={{float: 'right', color: '#38b0d2'}}/> :
            <ChevronDownIcon style={{float: 'right', color: '#38b0d2'}}/>
        }      
        </button>
      <div
        style={{ display: isShowing ? "block" : "none", padding: "16px",  background: "#01264C", borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px'}}
        dangerouslySetInnerHTML={{
          __html: props.content
        }}
      />
    </div>
  );
}
