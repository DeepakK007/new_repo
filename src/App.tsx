import "./styles.css";
import ACComp from "./AutocompleteComp.tsx";
import Button from "./Button.tsx";
import ButtonGroup from "./BUttonGroup.tsx";
const List: String[] = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
  "Austin",
  "Jacksonville",
  "San Francisco",
  "Indianapolis",
  "Columbus",
  "Fort Worth",
  "Charlotte",
  "Seattle",
  "Denver",
  "Washington",
];
export default function App(): any {
  return (
    <div className="App">
      <ACComp list={List} />
      <Button
        color={"secondary"}
        sx={{ height: "40px" }}
        onClick={() => {
          console.log("Clicked");
        }}
        
      > Deepak
        </Button>
      <ButtonGroup variant="primary">
        <Button>1</Button>
        <Button>2</Button>
      </ButtonGroup>
    </div>
  );
}
