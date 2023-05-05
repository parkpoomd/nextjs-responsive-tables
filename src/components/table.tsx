"use client";

export default function Table() {
  return (
    <div className="wrapper">
      <h1>Responsive Tables</h1>

      <table>
        <caption>The last 14 world F1 champions</caption>

        <thead>
          <tr>
            <th>Name</th>
            <th>Poles</th>
            <th>Podiums</th>
            <th>Wins</th>
            <th>Career points</th>
            <th>Championships</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td data-cell="name">Max Verstappen</td>
            <td data-cell="poles">22</td>
            <td data-cell="podiums">80</td>
            <td data-cell="wins">37</td>
            <td data-cell="career points">2080.5</td>
            <td data-cell="championships">2</td>
          </tr>

          <tr>
            <td data-cell="name">Max Verstappen</td>
            <td data-cell="poles">22</td>
            <td data-cell="podiums">80</td>
            <td data-cell="wins">37</td>
            <td data-cell="career points">2080.5</td>
            <td data-cell="championships">2</td>
          </tr>

          <tr>
            <td data-cell="name">Max Verstappen</td>
            <td data-cell="poles">22</td>
            <td data-cell="podiums">80</td>
            <td data-cell="wins">37</td>
            <td data-cell="career points">2080.5</td>
            <td data-cell="championships">2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
