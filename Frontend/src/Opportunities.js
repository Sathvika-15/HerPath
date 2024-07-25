import React from 'react';
import { useLocation } from 'react-router-dom';
import './Opportunities.css'; // Import the CSS file

function Opportunities() {
  const location = useLocation();
  const { opportunities } = location.state || { opportunities: [] };

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  return (
    <div>
      <center>
        <header>
          <h1>Matching Opportunities</h1>
        </header>

        <section>
          {opportunities.length > 0 ? (
            <table className="opportunities-table">
              <thead>
                <tr>
                  <th>Opportunity Name</th>
                  <th>Description</th>
                  <th>Duration</th>
                  <th>Additional Info</th>
                </tr>
              </thead>
              <tbody>
                {opportunities.map((opportunity, index) => (
                  <tr key={index}>
                    <td>{opportunity.Opp_name}</td>
                    <td>{opportunity.description}</td>
                    <td>{opportunity.Duration}</td>
                    <td>
                      {isValidUrl(opportunity.Additional_Info) ? (
                        <a href={opportunity.Additional_Info} target="_blank" rel="noopener noreferrer">
                          {opportunity.Additional_Info}
                        </a>
                      ) : (
                        opportunity.Additional_Info
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No matching opportunities found.</p>
          )}
        </section>
      </center>
    </div>
  );
}

export default Opportunities;