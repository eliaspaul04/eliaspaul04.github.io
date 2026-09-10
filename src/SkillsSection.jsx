import { useMemo, useState } from "react";
import { skillCategories } from "./data/skills.js";

function SkillsSection() {
  const [selectedSkillId, setSelectedSkillId] = useState("python");

  const allSkills = useMemo(
    () =>
      skillCategories.flatMap(
        (category) => category.skills
      ),
    []
  );

  const selectedSkill =
    allSkills.find(
      (skill) => skill.id === selectedSkillId
    ) || allSkills[0];

  return (
    <section id="skills" className="section skills-section">
      <p className="section-number">05</p>

      <div className="skills-header">
        <div>
          <h2>Skills</h2>
        </div>

        <p>
          Skills built through projects, internships, and applied
          technical work. Select one to see where it was actually used.
        </p>
      </div>

      <div className="skills-system">
        <div className="skills-index">
          {skillCategories.map((category, categoryIndex) => (
            <div
              className="skills-category"
              key={category.id}
            >
              <div className="skills-category-heading">
                <span>
                  {String(categoryIndex + 1).padStart(2, "0")}
                </span>

                <p>{category.title}</p>
              </div>

              <div className="skills-list">
                {category.skills.map((skill) => {
                  const isActive =
                    selectedSkill.id === skill.id;

                  return (
                    <button
                      type="button"
                      className={`skill-item ${
                        isActive ? "is-active" : ""
                      }`}
                      key={skill.id}
                      onClick={() =>
                        setSelectedSkillId(skill.id)
                      }
                    >
                      <span>{skill.name}</span>

                      <span className="skill-item-meta">
                        {skill.evidence.length}
                        <span>
                          {skill.evidence.length === 1
                            ? " proof"
                            : " proofs"}
                        </span>
                      </span>

                      <span className="skill-item-arrow">
                        ↗
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <aside className="skills-evidence">
          <div className="skills-evidence-top">
            <div>
              <p className="skills-evidence-label">
                SELECTED SKILL
              </p>

              <h3>{selectedSkill.name}</h3>
            </div>

            <span className="skills-evidence-count">
              {String(
                selectedSkill.evidence.length
              ).padStart(2, "0")}
            </span>
          </div>

          <p className="skills-evidence-description">
            {selectedSkill.description}
          </p>

          <div className="skills-evidence-divider"></div>

          <div className="skills-evidence-heading">
            <span>EVIDENCE</span>
            <span>
              {selectedSkill.evidence.length}{" "}
              {selectedSkill.evidence.length === 1
                ? "REFERENCE"
                : "REFERENCES"}
            </span>
          </div>

          <div className="skills-evidence-list">
            {selectedSkill.evidence.map(
              (item, index) => (
                <article
                  className="skills-evidence-card"
                  key={`${item.type}-${item.id}-${index}`}
                >
                  <div className="skills-evidence-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="skills-evidence-card-copy">
                    <span className="skills-evidence-card-type">
                      {item.type === "project"
                        ? "PROJECT"
                        : "EXPERIENCE"}
                    </span>

                    <h4>{item.label}</h4>

                    <p>{item.detail}</p>

                    {item.type === "project" ? (
                      <a
                        href={`#/projects/${item.id}`}
                        className="skills-evidence-link"
                      >
                        View Project
                        <span>↗</span>
                      </a>
                    ) : (
                      <a
                      href={`#experience-${item.id}`}
                      className="skills-evidence-link"
                      >
                        View Experience
                        <span>↗</span>
                      </a>
                    )}
                  </div>
                </article>
              )
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}

export default SkillsSection;