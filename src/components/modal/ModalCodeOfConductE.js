import React from 'react';
import Modal from 'react-bootstrap/Modal';

const ModalCodeOfConductE = ({ show, handleClose }) => {
  return (
    <Modal size="lg" show={show} onHide={handleClose} scrollable centered>
      <Modal.Header closeButton>
        <Modal.Title>• CODE OF CONDUCT ENFORCEMENT PROCEDURE •</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <br />
        <p>
          This document summarizes the procedures the PyCon staff uses to enforce the Code of
          Conduct.
        </p>
        <br />
        <h1>Summary of processes</h1>
        <p>
          When the work group receives a report of a possible Code of Conduct violation, it will:
        </p>
        <br />
        <ol>
          <li>Acknowledge the receipt of the report.</li>
          <li>Evaluate conflicts of interest.</li>
          <li>
            Call a meeting of Code of Conduct responders who do not have a conflict of interest.
          </li>
          <li>Evaluate the reported incident.</li>
          <li>Propose a behavioral modification plan.</li>
          <li>Propose consequences for the reported behavior.</li>
          <li>Vote on behavioral modification plan and consequences for the reported person.</li>
          <li>
            Contact online community administrators/moderators to approve the behavioral
            modification plan and consequences.
          </li>
          <li>Follow up with the reported person.</li>
          <li>Decide further responses.</li>
          <li>Follow up with the reporter.</li>
        </ol>
        <br />
        <h1>Acknowledge the report</h1>
        <p>
          Reporters should receive an emailed acknowledgment of the receipt of their report within
          24 hours.
        </p>
        <br />
        <h1>Conflict of interest policy</h1>
        <p>Examples of conflicts of interest include:</p>
        <br />
        <ul>
          <li>The reporter or reported person is your manager</li>
          <li>
            You have a romantic or platonic relationship with either the reporter or the reported
            person. It’s fine to participate if they are an acquaintance.
          </li>
          <li>
            The reporter or reported person is your metamour. (This is a term used in the poly
            community; the short definition is{' '}
            <a href="https://www.urbandictionary.com/define.php?term=metamours" target="blank">
              here
            </a>
            , and a longer description is{' '}
            <a href="https://solopoly.net/2012/09/29/whats-a-metamour-on-my-terms/" target="blank">
              here
            </a>
            ).
          </li>
          <li>The reporter or reported person is your family member</li>
          <li>The reporter or reported person is your direct client</li>
          <li>Propose consequences for the reported behavior.</li>
          <li>
            The reporter or reported person is someone you work closely with. This could be someone
            on your team or someone who works on the same project as you.
          </li>
          <li>
            Contact online community administrators/moderators to approve the behavioral
            modification plan and consequences.
          </li>
          <li>
            The reporter or reported person is a maintainer who regularly reviews your contributions
          </li>
        </ul>
        <br />
        <p>
          Committee members do not need to state why they have a conflict of interest, only that one
          exists. Other work group members should not ask why the person has a conflict of interest.
        </p>
        <br />
        <p>
          Anyone who has a conflict of interest will remove themselves from the discussion of the
          incident, and recuse themselves from voting on a response to the report.
        </p>
        <br />
        <p>Evaluating a report</p>
        <br />
        <h1>JURISDICTION</h1>
        <br />
        <p>
          -Is this a Code of Conduct violation? Is this behavior on our list of inappropriate
          behavior? Is it borderline inappropriate behavior? Does it violate our community norms?
        </p>
        <br />
        <p>
          -Did this occur in a space that is within our Code of Conduct’s scope? If the incident
          occurred outside the community, but a community member’s mental health or physical safety
          may be negatively impacted if no action is taken, the incident may be in scope. Private
          conversations in community spaces are also in scope.
        </p>
        <br />
        <h1>IMPACT</h1>
        <br />
        <p>
          -Did this incident occur in a private conversation or in a public space? Incidents that
          all community members can see will have more negative impact.
        </p>
        <br />
        <p>
          -Does this behavior negatively impact a marginalized group in our community? Is the
          reporter a person from a marginalized group in our community? How is the reporter being
          negatively impacted by the reported person’s behavior? Are members of the marginalized
          group likely to disengage with the community if no action was taken on this report?
        </p>
        <br />
        <p>
          -Does this incident involve a community leader? Community members often look up to
          community leaders to set the standard of acceptable behavior.
        </p>
        <br />
        <h1>RISK</h1>
        <br />
        <p>-Does this incident include sexual harrasment?</p>
        <br />
        <p>
          -Does this pose a safety risk? Does the behavior put a person’s physical safety at risk?
          Will this incident severely negatively impact someone’s mental health?
        </p>
        <br />
        <p>
          -Is there a risk of this behavior being repeated? Does the reported person understand why
          their behavior was inappropriate? Is there an established pattern of behavior from past
          reports?
        </p>
        <br />
        <p>
          Reports which involve higher risk or higher impact may face more severe consequences than
          reports which involve lower risk or lower impact.
        </p>
        <br />
        <h1>Propose a behavioral modification plan</h1>
        <br />
        <p>
          The event staff will determine a concrete behavioral modification plan that ensures the
          inappropriate behavior is not repeated. The event staff will also discuss what actions may
          need to be taken if the reported person does not agree to the behavioral modification
          plan.
        </p>
        <br />
        <p>
          What follows are examples of possible behavioral modification plans for incidents that
          occur in online spaces under the scope of this Code of Conduct. This behavioral
          modification list is not inclusive, and the event staff reserves the right to take any
          action it deems necessary.
        </p>
        <br />
        <ul>
          <li>Requiring that the reported person not use specific language</li>
          <li>Requiring that the reported person not join in on specific types of discussions</li>
          <li>
            Requiring that the reported person not send private messages to a community member
          </li>
          <li>Requiring that the reported person not join specific communication channels</li>
          <li>
            Removing the reported person from administrator or moderator rights to community
            infrastructure
          </li>
          <li>Removing a volunteer from their duties and responsibilities</li>
          <li>Removing a person from leadership of relevant organizations</li>
          <li>Removing a person from membership of relevant organizations</li>
        </ul>
        <br />
        <h1>Propose consequences</h1>
        <br />
        <p>
          What follows are examples of possible consequences to an incident report. This
          consequences list is not inclusive, and the event staff reserves the right to take any
          action it deems necessary.
        </p>
        <br />
        <h1>Possible private responses to an incident include:</h1>
        <br />
        <ul>
          <li>Nothing, if the behavior was determined to not be a Code of Conduct violation</li>
          <li>A verbal or emailed warning</li>
          <li>A final warning</li>
          <li>Temporarily removing the reported person from the online community</li>
          <li>Permanently removing the reported person from the online community</li>
          <li>Publishing an account of the incident</li>
        </ul>
        <h1>Follow up with the reported person</h1>
        <br />
        <p>
          The event staff will work with online community administrators/moderators to draft a
          response to the reported person. The email should contain:
        </p>
        <br />
        <ul>
          <li>A description of the person’s behavior in neutral language</li>
          <li>The negative impact of that behavior</li>
          <li>A concrete behavioral modification plan</li>
          <li>Any consequences of their behavior</li>
        </ul>
        <br />
        <p>
          The work group should not state who reported this incident. They should attempt to
          anonymize any identifying information from the report. The reported person should be
          discouraged from contacting the reporter to discuss the report. If they wish to apologize
          to the reporter, the work group can accept the apology on behalf of the reporter.
        </p>
        <br />
        <h1>Decide further responses</h1>
        <br />
        <p>
          If the reported person provides additional context, the event staff may need to
          re-evaluate the behavioral modification plan and consequences.
        </p>
        <br />
        <h1>Follow up with the reporter</h1>
        <br />
        <p>
          A person who makes a report should receive a follow up email stating what action was taken
          in response to the report. If the work group decided no response was needed, they should
          provide an email explaining why it was not a Code of Conduct violation. Reports that are
          not made in good faith (such as “reverse sexism” or “reverse racism”) may receive no
          response.
        </p>
        <br />
        <p>
          The follow up email should be sent no later than one week after the receipt of the report.
          If deliberation or follow up with the reported person takes longer than one week, the work
          group should send a status email to the reporter.
        </p>
        <br />
      </Modal.Body>
    </Modal>
  );
};

export default ModalCodeOfConductE;
