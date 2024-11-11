import Main from "./main";
import { MAIN_DATA } from "./data";

function ExampleDataView() {
  return <Main content={MAIN_DATA[1].content} />;
}

export default ExampleDataView;
