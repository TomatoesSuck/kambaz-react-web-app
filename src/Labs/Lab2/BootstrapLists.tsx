import ListGroup from "react-bootstrap/ListGroup";

export default function BootstrapLists() {
  return (
    <div>
      <div id="wd-css-styling-lists">
        <h2>Favorite movies</h2>
        <ListGroup>
          <ListGroup.Item active>Aliens</ListGroup.Item>
          <ListGroup.Item>Terminator</ListGroup.Item>
          <ListGroup.Item>Blade Runner</ListGroup.Item>
          <ListGroup.Item>Lord of the Rings</ListGroup.Item>
          <ListGroup.Item disabled>Star Wars</ListGroup.Item>
        </ListGroup>
      </div>

      <br />

      <div id="wd-css-hyperlink-list">
        <h2>Favorite books</h2>
        <ListGroup>
          <ListGroup.Item
            action
            href="https://en.wikipedia.org/wiki/Dune_(novel)"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dune
          </ListGroup.Item>

          <ListGroup.Item
            action
            href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lord of the Rings
          </ListGroup.Item>

          <ListGroup.Item
            action
            href="https://en.wikipedia.org/wiki/The_Forever_War"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Forever War
          </ListGroup.Item>

          <ListGroup.Item
            action
            href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)"
            target="_blank"
            rel="noopener noreferrer"
          >
            2001 A Space Odyssey
          </ListGroup.Item>

          <ListGroup.Item
            action
            href="https://en.wikipedia.org/wiki/Ender%27s_Game"
            target="_blank"
            rel="noopener noreferrer"
            disabled
          >
            Ender's Game
          </ListGroup.Item>

          <ListGroup.Item
            action
            onClick={() => alert("New book added")}
          >
            Add another book
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}