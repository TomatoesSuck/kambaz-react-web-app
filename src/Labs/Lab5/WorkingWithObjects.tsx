import { useState } from "react";
import { FormControl } from "react-bootstrap";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
      });

      const [module, setModule] = useState({
        id: 1,
        name: "Web Dev Module",
        description: "Introduction to React and Express",
        course: "CS5610"
      });

  const MODULE_API = `${REMOTE_SERVER}/lab5/module`;
  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      <h4>🔹 Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary mb-2"
        href={`${REMOTE_SERVER}/lab5/assignment`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Get Assignment
      </a>

      <h4>🔹 Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment/title`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Get Title
      </a>

      <h4>🔧 Modifying Properties</h4>

      <a
        id="wd-update-assignment-title"
        className="btn btn-primary float-end mb-2"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>

      <FormControl
        className="w-75 mb-4"
        id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />

      <h4>Update Assignment Score</h4>

      <FormControl
        className="mb-2"
        type="number"
        id="wd-assignment-score"
        defaultValue={assignment.score}
        onChange={(e) =>
          setAssignment({ ...assignment, score: parseInt(e.target.value) })
        }
      />
      <a
        id="wd-update-assignment-score"
        className="btn btn-primary"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
      >
        Update Score
      </a>

      <h4>Update Assignment Completed</h4>
      <input
        id="wd-assignment-completed"
        type="checkbox"
        className="form-check-input me-2"
        checked={assignment.completed}
        onChange={(e) =>
          setAssignment({ ...assignment, completed: e.target.checked })
        }
      />
      <label htmlFor="wd-assignment-completed">
        Completed
      </label>
      <br />
      <a
        id="wd-update-assignment-completed"
        className="btn btn-primary mt-2"
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
      >
        Update Completed
      </a>
      
      <hr/>

      <h4>Retrieving Module</h4>
      <a
        id="wd-get-module"
        className="btn btn-primary"
        href={`${MODULE_API}`}
      >
        Get Module
      </a>

      <h4>Retrieving Module Name</h4>
      <a
        id="wd-get-module-name"
        className="btn btn-primary"
        href={`${MODULE_API}/name`}
      >
        Get Module Name
      </a>

      <h4>Update Module Name</h4>
      <FormControl
        className="mb-2"
        id="wd-module-name"
        defaultValue={module.name}
        onChange={(e) =>
          setModule({ ...module, name: e.target.value })
        }
      />
      <a
        id="wd-update-module-name"
        className="btn btn-primary"
        href={`${MODULE_API}/name/${module.name}`}
      >
        Update Module Name
      </a>

      <h4>Update Module Description</h4>
      <FormControl
        className="mb-2"
        id="wd-module-description"
        defaultValue={module.description}
        onChange={(e) =>
          setModule({ ...module, description: e.target.value })
        }
      />
      <a
        id="wd-update-module-description"
        className="btn btn-primary"
        href={`${MODULE_API}/description/${module.description}`}
      >
        Update Description
      </a>
    </div>
  );
}