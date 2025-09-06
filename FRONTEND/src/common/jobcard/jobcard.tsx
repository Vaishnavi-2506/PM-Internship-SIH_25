import React from "react";
import "./jobcard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendarDays,
  faMoneyBillWave,
  faBriefcase,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  startDate: string;
  stipend: string;
  experience: string;
  daysAgo: string;
  earlyApplicant: boolean;
  activelyHiring?: boolean;
  companyLogo: string;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  company,
  location,
  startDate,
  stipend,
  experience,
  daysAgo,
  earlyApplicant,
  activelyHiring,
  companyLogo,
}) => {
  return (
    <div className="job-card-rectangle">
      <div className="jobcard-left">
        {activelyHiring && (
          <div className="badge-actively-hiring">
            <FontAwesomeIcon icon={faBolt} /> Actively hiring
          </div>
        )}

        <h4 className="job-title">{title}</h4>
        <p className="company-name">{company}</p>

        <div className="job-location">
          <FontAwesomeIcon icon={faLocationDot} /> {location}
        </div>

        <div className="job-details">
          <div>
            <FontAwesomeIcon icon={faCalendarDays} /> <strong>Start:</strong>{" "}
            {startDate}
          </div>
          <div>
            <FontAwesomeIcon icon={faMoneyBillWave} /> <strong>Stipend:</strong>{" "}
            {stipend}
          </div>
          <div>
            <FontAwesomeIcon icon={faBriefcase} /> <strong>Experience:</strong>{" "}
            {experience}
          </div>
        </div>

        <div className="job-tags">
          <span className="tag blue">{daysAgo} ago</span>
          <span className="tag gray">Job</span>
          {earlyApplicant && (
            <span className="tag yellow">Be an early applicant</span>
          )}
        </div>
      </div>

      <div className="jobcard-right">
        <img
          src={companyLogo}
          alt={`${company} logo`}
          className="company-logo"
        />
        <button className="apply-button">Apply Now</button>
      </div>
    </div>
  );
};

export default JobCard;
