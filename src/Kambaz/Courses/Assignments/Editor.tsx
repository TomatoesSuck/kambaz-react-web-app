import { useParams } from "react-router-dom";

export default function AssignmentEditor() {
    const { aid } = useParams();  // get the assignment ID from the URL parameters
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><h3>Assignment Name</h3></label>
        <input id="wd-name" value={aid} /><br /><br />

        <textarea
        id="wd-description"
        defaultValue={`The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbaz application Links to all relevant source code repositories The Kanbaz application should include a link to navigate back to the landing page.`}
        rows={6}
        cols={50}/>
        <br /><br />

        <table style={{ borderSpacing: "10px" }}>
          <tbody>
            <tr>
            <td align="right"><label htmlFor="wd-points">Points</label></td>
            <td><input id="wd-points" type="number" defaultValue={100} /></td>
            </tr>

            <tr>
            <td align="right"><label htmlFor="wd-group">Assignment Group</label></td>
            <td>
                <select id="wd-group">
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>EXAMS</option>
                <option>PROJECT</option>
                </select>
            </td>
            </tr>

            <tr>
            <td align="right"><label htmlFor="wd-display-grade-as">Display Grade As</label></td>
            <td>
                <select id="wd-display-grade-as">
                <option>Points</option>
                <option>Percentage</option>
                </select>
            </td>
            </tr>

            <tr>
            <td align="right"><label htmlFor="wd-submission-type">Submission Type</label></td>
            <td>
                <select id="wd-submission-type">
                <option>Online</option>
                <option>On Paper</option>
                <option>No Submission</option>
                </select>
            </td>
            </tr>

            <tr>
            <td align="right" valign="top">Online Entry Options</td>
            <td>
                <label><input id="wd-text-entry" type="checkbox" /> Text Entry</label><br />
                <label><input id="wd-website-url" type="checkbox" /> Website URL</label><br />
                <label><input id="wd-media-recordings" type="checkbox" /> Media Recordings</label><br />
                <label><input id="wd-student-annotation" type="checkbox" /> Student Annotation</label><br />
                <label><input id="wd-file-upload" type="checkbox" /> File Upload</label>
            </td>
            </tr>

            <tr>
            <td align="right"><label htmlFor="wd-assign-to">Assign to</label></td>
            <td><input id="wd-assign-to" defaultValue="Everyone" /></td>
            </tr>

            <tr>
            <td align="right"><label htmlFor="wd-due-date">Due</label></td>
            <td><input id="wd-due-date" type="date" defaultValue="2025-07-08" /></td>
            </tr>

            <tr>
            <td align="right"><label htmlFor="wd-available-from">Available from</label></td>
            <td><input id="wd-available-from" type="date" defaultValue="2025-07-01" /></td>
            </tr>

            <tr>
            <td align="right"><label htmlFor="wd-available-until">Until</label></td>
            <td><input id="wd-available-until" type="date" defaultValue="2025-07-01" /></td>
            </tr>
          </tbody>
        </table>
        <br />
    
        <div style={{ textAlign: "right", marginTop: "10px" }}>
        <button>Cancel</button>{" "}
        <button>Save</button>
        </div>
      </div>
  );}

