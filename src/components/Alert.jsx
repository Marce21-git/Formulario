import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";


const Alert = ({color, messagge}) => {

  return (
    <>
      <Stack direction="horizontal" gap={2}>
        <span className={" miAlerta badge bg-"+color+" my-3 p-2 "}>{messagge}</span>
      </Stack>
    </>
  );
}

export default Alert
