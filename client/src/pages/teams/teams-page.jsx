import React, { useState, useEffect } from 'react';

import HeroWrapper from '../../components/hero-wrapper';
import DepartmentWrapper from './components/department-wrapper';
import FoundersWrapper from './components/founders-wrapper';
import APIService from '../../services/pages-service';

const TeamsPage = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedDepartments = await APIService.fetchTeams();
      setDepartments(fetchedDepartments);
    })();
  }, []);

  return (
    <>
      <HeroWrapper
        title="Let's meet"
        subtitle='Meet colleagues who work in office or work from home'
        image='https://res.cloudinary.com/dipwpo4gx/image/upload/v1640192584/Hero%20Sections/team_wfnmes.jpg'
        bgcolor='#39aaf8'
      ></HeroWrapper>
      {departments.map((department) =>
        department.title !== 'Founders' ? (
          <DepartmentWrapper key={department.id} {...department} />
        ) : (
          <FoundersWrapper key={department.id} {...department} />
        )
      )}
    </>
  );
};

export default TeamsPage;
