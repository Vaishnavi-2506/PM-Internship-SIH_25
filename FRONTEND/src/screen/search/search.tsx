import React from "react";
import "./search.css";
import JobCard from "../../common/jobcard/jobcard";
import { faFilter, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const jobData = [
  {
    id: 1,
    title: "Corporate Sales Manager",
    company: "MiTran Global",
    location: "Chennai",
    startDate: "Immediately",
    stipend: "₹ 3,00,000 - 3,60,000",
    experience: "1–4 years",
    daysAgo: "3 days",
    earlyApplicant: true,
    activelyHiring: true,
    companyLogo:
      "data:image/jpeg;base64,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",
  },
  {
    id: 2,
    title: "Marketing Specialist",
    company: "BlueWave Solutions",
    location: "Bangalore",
    startDate: "Next Month",
    stipend: "₹ 2,50,000 - 3,00,000",
    experience: "2–5 years",
    daysAgo: "1 day",
    earlyApplicant: false,
    activelyHiring: true,
    companyLogo:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PEA4ODxAREBASDREQEBIRDRAQEA8SFh0YFiARGhkeKDQgHSAxHhkWJDMhMTUtOjAwGSs2RD8tNzQtLi0BCgoKDg0OFxAQGSseFyUrLSsrNy0rLS0tLS0tLS4tLSsrLSstLS0tLTctLS0tLS0tNy0tNy03Ky0rLS0rLS0tK//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIEBQYHAwj/xABFEAABAwIDBAUJBgMFCQAAAAABAAIDBBEFEiEGEzFBByJRYXEUIzJCVIGRk9EVF1KSocFTYrEkM0Ny0hZjc4OisuHw8f/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACQRAQACAgAHAAMBAQAAAAAAAAABAgMRBBITITFBURQiYVIy/9oADAMBAAIRAxEAPwDuKIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICKCouhtUipupUCUUKVIIiICIiAiIgIiICIiAiIgIiICIiAiKEEqkmyssTnkY0GNpec2oHGytaWolewl0R1eRlcQOr2/1Vor2Um8b0v55XFrjEWl1urf0brHV1XO1sbmBjiP7zrgDMOQ96946VrPNsjvG65ccw0JXlHgcQaYxmawnMW3v1uN7q0aie6l4tMdlLMRlEIOUPlyAuY1wvm5hXIxGwaZGlhLbnS9u5eMWHboEC7s5cXO0zC6thhhYzqFzha1pOferarMs93iGUoKzetDrZe48fFXi1qkqrXytc0t4gg8llcPxJsvVOj+YVb49d4Xx5d9pZFFSCpWbdKIEQEREBERAREQEREBERAREQFSqlQToUFhVVrWOyPexpJ6ozgOIOl7eN+Cs8SjqpLbkiPK4tcJPW/mFlkX0TJHNe9gLm+iSASF7S6NJ7ASrxLK1NrCmxKGNjI5aiHeNaGvvKxpzAWOl16jF6X2mH58f1XzlilSZaiolufOVErxxPFxIC9hglaQCKWpIIuPMSc9exdf4caiZlnGWY8Poj7YpfaIfnx/VecmJUbxlNRAdRbz8fEe9fPf2HXey1PyJfookwWtAJNLUAAEkmCQAW1vwT8Ov+jrT8fQUu6nBMMjHOaPUe13uNlr1Q9zTp5t7XatBBLe/wXGcMxOamkbNBI5rmuuNSGutyIXbo8tbRx1cYDXOYHkcz2tS2OcU6nwxy/tHNHlsOFVgljBBueB8Ve3Wn7NVAjkLXOADx1bkDUclt44Lly15bN+Hyc9FYRQCpWboEREBERAREQEREBERAREQFClEELF7S1W5pKmThlhcVlVp3SpU7vDphfV7ms+KvjjdohW3hxDCqcyzU8XEulY3xvpdfTUTAAAOAFhovm7ZyujpqqCoka5zI35yGgX0966gOluj/gVH5Yv9S7+Lx3tMRWPDnxWiPLomVUvaCCDw4HTtXPT0t0f8Co/LH/qVji/SvG6J7KWCUSuaQ10uRrW3HpdUnguWOGy/G05K68ub40WeUVOQWZvpLDkBfgF3HZOkljw6jbGBfdsLg6/PkuObMYBNiFQ2MAmPODPJY5Wtvc+9fQ8ELWMbGB1WgAe5bcXfURX2xx03ufTQJarcV7mPA0Iy9UnQkaroUZuAe5c72xaBXxkA5iIz7hcfuF0Kn9Bv+ULPiNTWsseE3F71ezQpUBSuV6AiIgIiICIiAiIgIiICIiAiIghcz6bKq0NLCD6Ujnnwba37rpi4x0z1Oashiv6FOL+LiT9Fvw0byQzyzqrXdkNlpMSfLGyQRbtrSXFhde/Litq+6Oo9rj+SfhxWT6FaS0VVOfWmDB4NA/ddLAW2bibxeYiWePHE17uQfdFUe1x/Jd9Vg9qthqjD4xM6RkseYNcQ0gsJ0BXeyuedMdYG0bIRbNJM3TnZpzE/omHiMlrxEym2KsVa30R4y+OqNGdY5muc3hcPb1r38AV2dcL6JqXPiTHW0jie73kZf3Xa6ypbEwvdwAue5U4uN5OyMdtVmZ8NbxWdrqxkOQuJIOYtFhbXLf8A94La2cLLTNlc9TUzVb9GNJDNOJPP4f1W6BZ5u2q/FeG77v8AVQClQFKxdQiIgIiICIiAiIgIiICIiAiIgouvn/pHqxLidWeTHMjGv4WN/e6+gSFrlbsXhsjnyvpWve92ZxzyAknnxW+DLGO25hnlpNo1DiuD7V1tHHuaeYMZmLiMjXanW6v/ALw8V9pHymLq42Fwr2Ro/wCZJ9VQzYjCSbCkb+eTw7V0zxOKe81ZRjtHtyv7w8V9oHymLC1+JVNbKHyvdNIeqwaXudLWC7j/ALB4V7Kz5kn1V3QbOYfSkyRQRxkcXG7iO/VRHE4471qdO0+ZYLoy2XdRROmmFppgLt/A38KyG1M8kwFJT6mQlsjh/ht4lZSorXvJZTi9xbOQcje/vU4Jh4iaTYh7nZnlxu5xXPN92558lq7jkh74TQNp4mRt5NtrxPer6ygKVjM7nct61isREAUoihYREQEREBERAREQQqZHhoLibAC5PYBrdVFWONtvTVI7aeUf9JSI2iZ1DwO0lFw8oi/OFcUuKwS6Rysef5XglfPuyuEU1VUuiqZdzHu3vzAi7nggZbm45/opxSmZRVjW0M5ks5hZIzLmLibFmg15Lt/Fr433YdZ36rxmmhdklmYx1r2c6xtwur2OUOAc3VpFwe0FcP6VQXVVG54676KIOHMG5N10qXaekoIaSOofkc6mjLRbkAAsLYZisTHtpXJvy2m6grD4ptHS0sMdRM8tjktkNuOYXBSl2kpJaY1jZRuBmu86eibH+iyitteF9wv62l3rSzM5l/WYbOXnTUTomsY2QkNaQS/rOPfdapD0n4c6TJeQNvYPLDl7Lrc6eZsjWvYQ5rmhzSOBB1uptFq+VYisraWmlJbZ4aLWcQwZie0XVtDhBJcZnGTraalt/EDQryx3aqjoXNZUSZHOaXDS+nC6rxfaejo2xvqJcgkF2aekp/b4iYr7ZVkQbYCwHYAq7LC4rtTR0sUU80lo5bZCBe99VFbtVRw0zKt8longFmnWffsCry2n0turOBTdaXT9JWGvDzne3KAbOZYuuQNPiFkX7a0Ap2VZltE+Qxh1vXAzWU9O/wAOaGx3S6w8W0dK6lNcH3pwLl1u+yowvaijqopZopbxxGz3EWDdL3UctvhzQzd0Wiv6UcOEmS8hbe2cRnL2XW40NbHOxksTg9jxdrhwIS1LR5TFoldIoUqEiIiAiIghWWMOtTzn/cSf9pV6rXEqcyxSxA2L4nsB7MwskeUT4fPmymCMr6p1PJIY25HyXGXWxAy6+K9No8L+yqqMQzCUsAla7K05XfhIC2d3RPU8qln5XA+F7q8wnooLZGvqZ87AblrGkZra2JXpznr97OaKWYDpIqnTVFBK7Rz6KFzhb1i4m69OlE+foOz7PhPLkXLcdsNgn108EsczYmxwtjDS1x0aSQdPFe+12wvlzKbLIGTQxCLMWmz26e//AOrGMtf1/ieWdSwPSXUxuwvDw1zSSIyACL2DQtbxN724JhzAbMfUVDn255XmwWxydE79yLVN582t826DewBbDRbDt+zW4dUuD3Ne97ZGNsWuc4uBHxVoy0rWIifZy2me7nwwuqrKSnZFQQsaA1zZwbPeDxce266l0f0E9NQww1Fs7MwaA7PlZckC/hZaP919aLxtrPM31F3gOvzIBsulbO4Z5JTQ0xeZN3GGZncTZZ58kTXULY66lzXppon56eexLN06Nx0sLm6xHSHj0VbFQiIgkQ532/wy4eiuwbQ4NHXU8lPILZh1Xc438Q8eBWo7L9G0dMZnVL21GeJ0Y0IsHCxPjxU481IrG/Ralt7hpu2eNQ1VHhkUXWkbGC4CxcwgZcv6q12zhkjOHUsxs2Klj7LMLrAm3gt12e6MhT1cdRNKJmRPL2Mym+bkXHuWc242OjxJrHAiOaM9V5AII/CVfr0i0RHhHTnW5aNt1s5h1NRQzUxAlLmWtIXb0EG5Iv4K1moHSYBC+MX3VYXvsOAylt/1CycPRLLu3Z6hokuMnVJY0c+9bzsps75HR+RzObMC55d1eq4OAFrFRbNWsRqd9yKS5zQ7RwNwKWkJG+zbtrNLkEh2fw0KxlJHNFgtRILtbPXRsHIljWkk+F/6LaJuie85LZwKcyZt3kGYMOuQFb5W7P08tIaFzLQ5A0Cwu23PxS+bHH/PudkUmXHsNoKipohDBQwuFz/aeEuYG97++1l0foxwuppKR0VRYeeJjDX5w1hA/fMtXk6L6yMubBWZYXG5bdzdOHIrftksDNDTMpzK6XKXEOd6oJvlb3KmbLFo7JpSYlnkRFyN0oiICIiCEUqh5NjbjbTxQVLxqnWY89jCf0WuursYuQKSntc2Jn1I7eKGtxr2Om+f/wCUGtYXNUyyYWXVdRaZ9UZQJSG+aeMo+Dj8FkMZx6emrqogvmYyjjc2PVsULi51y/tvpr3LIvrMWaMxpKVoaCcxmAyjmeKtqHG8SqAXQw0UzQ4tJZVBwzDXLoePBaRaN70pO2JO2E+dlVa7BTvDmNLjBJlfl3w7uV+5V1G2M0krDGWNp3eUMBzf3hYdHArOeVYv7HS8P436cVSKzFrlopKTMBe2+1AOl+Pcrc9f8o1P1iKLbeYZI92H2pWO6ziZXnI1+8I/CSbX7irmh2ync6KOSGMF80LOo5xGSRrX3GvLNb3LIeVYv7JSjkPPHUfFeceJ4oXuYyno87bZ2ioBe2/AnXssqzas+jX9WlfjlRBXVUcZMgL6WJkcjju2GTKC4dnFYqt21qJ208bRuHSSU5LmvcHvzPbcMN9Ra9+662GpxDFY2mSSmpGtGpc6ewA+KtabH62UvEcdBJkBL8lU12RvaddFNZiPRr+sbFttNDHDdoeX2cXSPdd+Z7WZWa8s1/cvba2rqzWNipn1AcaTeMZC52TeZmjM8dliVkm4liZj3u4oTEGl28E/m8o53uvY1+LAB/k1HbQZt8bam1r38FE2j4a/rEV+11W2OeFsbW1UMbnS3vaNjctpPA3KvMXxxzYsIqHTCNj5xvnNeRG5pY82PvsrqOvxZ5dlp6N3WLXWmdoR6vFVunxc2BpaQjvkPw4pNo+JhhajbOaOastu5Ig6Hcm5ysa+95Cfw6W947Vn9gq2Sel3krzI4zzalxdYA6NF+S8hNi/slHwsfOu+HFVtqMZGgpqQD/iu+qibRMdoTETDZ1K1g1WNez0nzH/VZbCJKoscatkbH5yAInEtLbDW596osySIiAiIgIiICiylEEAIQpUFBjsdoDU080DTlL22B5XBvZadDsnWG7y6OFzjEx7IHuY0sja8B1xzJI+AXQcqjIrVvNfCsxtp+z+B10Mr3zzmRpgyN84462AtbuI4rHHZSuuX73rupxG5xneNQ97sv5XNF+5dByKcqnqTvZyufYdgWICqjL3vDI90S/evy5eJiA9bsv3L0r9lKszVMsEpbvareAb57RawAd7jy7lvmRVWTqScrTqjZ2odQVNO+QyTSzPdmfIXNy5ri1+HVVxR4A5jcTaWR/2neBjeDS1zSMp7ltGVTZRzHK51JslX5GxiYFopHQnruDdWFpiy8CDfilXsriEjXROlBjaczAJnjMczHAHssGusuh5ELVfq2OVoJ2ZxDN1ZsrS95Fpn+bvl6381wCPerjDtna2N8RMxc0SxvfeZ5vYSNI1/zMW75UDVE5ZkiuhgU2QKVmsiwUBqqRAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf//Z",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "DesignHub",
    location: "Mumbai",
    startDate: "Immediately",
    stipend: "₹ 1,80,000 - 2,40,000",
    experience: "1–3 years",
    daysAgo: "5 days",
    earlyApplicant: true,
    activelyHiring: false,
    companyLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLOFdHApg1Cf5WxD1yIjTqwYPaqK6uZBerXQ&s",
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "TechNest",
    location: "Hyderabad",
    startDate: "Within 2 weeks",
    stipend: "₹ 2,20,000 - 2,80,000",
    experience: "1–3 years",
    daysAgo: "2 days",
    earlyApplicant: false,
    activelyHiring: true,
    companyLogo:
      "data:image/jpeg;base64,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",
  },
  {
    id: 5,
    title: "Data Analyst",
    company: "DataMinds",
    location: "Pune",
    startDate: "Immediately",
    stipend: "₹ 2,00,000 - 2,50,000",
    experience: "2–4 years",
    daysAgo: "4 days",
    earlyApplicant: true,
    activelyHiring: false,
    companyLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIgierI_3aJ0-jONGmmA123oqA6vdXOW5sug&s",
  },
  {
    id: 6,
    title: "HR Manager",
    company: "PeopleFirst",
    location: "Delhi",
    startDate: "Next Month",
    stipend: "₹ 3,20,000 - 3,80,000",
    experience: "3–6 years",
    daysAgo: "1 day",
    earlyApplicant: false,
    activelyHiring: true,
    companyLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBRFQnwIYyM6mhA7JhKCAFPV5GQD5BZVu2hg&s",
  },
  {
    id: 7,
    title: "Project Coordinator",
    company: "BuildIt Corp",
    location: "Kochi",
    startDate: "Immediately",
    stipend: "₹ 2,10,000 - 2,70,000",
    experience: "1–3 years",
    daysAgo: "3 days",
    earlyApplicant: true,
    activelyHiring: true,
    companyLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKk2tNOKL-ANJin6yMG6P_pCwPRBqts4X49A&s",
  },
  {
    id: 8,
    title: "Business Analyst",
    company: "InsightWorks",
    location: "Chennai",
    startDate: "Within 1 week",
    stipend: "₹ 3,00,000 - 3,50,000",
    experience: "2–5 years",
    daysAgo: "2 days",
    earlyApplicant: false,
    activelyHiring: false,
    companyLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd9NaXGTThB_Zy1oZ4FSTZEYaSgJR_3BO-pQ&s",
  },
  {
    id: 9,
    title: "Software Tester",
    company: "QA Experts",
    location: "Bangalore",
    startDate: "Immediately",
    stipend: "₹ 1,90,000 - 2,30,000",
    experience: "1–3 years",
    daysAgo: "5 days",
    earlyApplicant: true,
    activelyHiring: true,
    companyLogo:
      "data:image/png;base64,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",
  },
  {
    id: 10,
    title: "Content Writer",
    company: "WriteRight",
    location: "Mumbai",
    startDate: "Next Month",
    stipend: "₹ 1,50,000 - 1,90,000",
    experience: "1–2 years",
    daysAgo: "4 days",
    earlyApplicant: false,
    activelyHiring: false,
    companyLogo:
      "data:image/jpeg;base64,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",
  },
];

const SearchPage: React.FC = () => {
  return (
    <div className="search-page">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="logo">PM INTERNS</div>

        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input className="search-input" type="text" placeholder="Search..." />
        </div>

        <div className="profile-icon">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>

      {/* Main content area */}
      <div className="main-content">
        <aside className="filter-sidebar">
          <h3>
            <FontAwesomeIcon icon={faFilter} /> Filter
          </h3>
          <div className="filter-group">
            <label>Job Role</label>
            <select>
              <option>All</option>
            </select>

            <label>Job Type</label>
            <select>
              <option>All</option>
            </select>

            <label>Location</label>
            <select>
              <option>All</option>
            </select>

            <label>Education Level</label>
            <select>
              <option>All</option>
            </select>

            <label>Experience</label>
            <select>
              <option>All</option>
            </select>

            <label>Stipend</label>
            <select>
              <option>All</option>
            </select>

            <label>Industry</label>
            <select>
              <option>All</option>
            </select>
          </div>
        </aside>

        {/* Job Section */}
        <main className="job-section">
          <h2 className="internship-header">
            <FontAwesomeIcon icon={faGraduationCap} /> Internship Offers
          </h2>
          <div className="job-cards-container">
            {jobData.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SearchPage;
