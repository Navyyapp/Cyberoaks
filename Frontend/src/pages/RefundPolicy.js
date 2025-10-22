import React from "react";
import "./RefundPolicy.css";

export default function RefundPolicy() {
  return (
    <div className="refund-container">
      <h1 className="refund-title">Refund Policy – Cyberoaks</h1>

      <p className="refund-intro">
        At <strong>Cyberoaks</strong>, we are committed to delivering
        high-quality training programs that empower students with
        industry-relevant skills and career opportunities. Our refund policy is
        designed to ensure fairness while maintaining the integrity of our
        learning and placement commitments.
      </p>

      <h2>General Conditions for Refunds</h2>
      <ul>
        <li>
          <strong>Enrollment Fees:</strong> Enrollment or registration fees are
          non-refundable under all circumstances.
        </li>
        <li>
          <strong>Withdrawal Before Course Start:</strong> If a student withdraws
          before the commencement of the course, 80% of the program fee
          (excluding enrollment fee) will be refunded.
        </li>
        <li>
          <strong>Withdrawal After Course Start:</strong> Once the course has
          commenced, no refunds will be provided, except under Cyberoaks’ Job
          Guarantee/Job Assistance conditions.
        </li>
      </ul>

      <h2>Premium Program – Refund Eligibility</h2>
      <p>
        Students enrolled in the <strong>Premium Program</strong> will be
        considered for a refund of course fees only if Cyberoaks fails to
        provide job assistance despite the student fulfilling all program
        conditions:
      </p>

      <ul>
        <li>
          <strong>Attendance:</strong> Minimum 85% attendance in live sessions
          and project-based activities.
        </li>
        <li>
          <strong>Academic Performance:</strong> Completion of all modules,
          assignments, project work, and achieving at least 90% in assessments.
        </li>
        <li>
          <strong>Internship:</strong> Successful completion of internship
          tasks.
        </li>
        <li>
          <strong>Job Assistance:</strong> If no job interview opportunity is
          provided within 4 months of program & internship completion, a refund
          of up to 50% of the tuition fee will be processed.
        </li>
      </ul>

      <p className="program-details">
        <strong>Mock Tests Provided:</strong> 4 |{" "}
        <strong>Major Interview Opportunities:</strong> 1
      </p>

      <h2>Advanced Program – Refund Eligibility</h2>
      <p>
        Students enrolled in the <strong>Advanced Program</strong> are covered
        under Cyberoaks’ Job Guarantee. Refunds will be considered only if
        Cyberoaks fails to provide placement support despite students meeting
        all the following conditions:
      </p>

      <ul>
        <li>
          <strong>Attendance:</strong> At least 85% in live sessions, project
          activities, and internship participation.
        </li>
        <li>
          <strong>Academic Performance:</strong> Completion of all modules,
          projects, assignments, and internship tasks, with a minimum 90%
          assessment score.
        </li>
        <li>
          <strong>Internship:</strong> Full completion of the internship
          program.
        </li>
        <li>
          <strong>Active Participation:</strong> Participation in mock tests and
          interview preparation sessions.
        </li>
      </ul>

      <p className="program-details">
        <strong>Mock Tests Provided:</strong> 6 |{" "}
        <strong>Major Interview Opportunities:</strong> 2
      </p>

      <p>
        If, after fulfilling all the above conditions, the student does not
        receive at least 2 major interview opportunities within 4 months of
        course & internship completion, Cyberoaks will refund 50% of the tuition
        fee (excluding enrollment fee).
      </p>

      <h2>Important Notes</h2>
      <ul>
        <li>
          Refund claims must be raised within 30 days after the job
          assistance/guarantee period ends.
        </li>
        <li>
          All claims will be subject to verification of attendance, assessment
          scores, internship completion, and participation records.
        </li>
        <li>
          Refunds will not be applicable in cases of non-compliance with program
          requirements, misconduct, or voluntary withdrawal.
        </li>
      </ul>

      <div className="refund-contact">
        <p>
          For any refund-related queries, please contact us:
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:cyberoaks53@gmail.com">cyberoaks53@gmail.com</a>
        </p>
        <p>
         <strong>Phone:</strong>{" "}
          <a href="tel:+917893907799">+91 7893907799</a>
        </p>
      </div>
    </div>
  );
}
