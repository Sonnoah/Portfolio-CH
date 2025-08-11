"use client";

import { EduItem } from "./fucn/itextpop";


export default function Education() {
  return (
    <div className="EDU">
      <h1 className="h1-EDU">EDUCATION</h1>

      <EduItem
        years="2019 - 2021"
        gpa="3.38"
        school="Wutthiwitthaya 2 School"
        delay={0.1}
      />

      <EduItem
        years="2022 - 2025"
        gpa="3.35"
        school="Rajamangala University of Technology Isan"
        delay={0.3}
      />
    </div>
  );
}
