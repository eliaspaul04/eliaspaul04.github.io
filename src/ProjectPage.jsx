import { useEffect, useState } from "react";

function ProjectPage({ project }) {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!selectedImage) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  if (!project) {
    return (
      <main className="project-page project-not-found">
        <p className="section-number">404</p>

        <h1>Project not found.</h1>

        <a href="#projects" className="button primary">
          Back to Projects
        </a>
      </main>
    );
  }

  const hasGitHub = project.github;
  const hasLiveDemo = project.liveDemo;
  const hasVideo = project.video;

  const hasGallery =
    project.gallery && project.gallery.length > 0;

  const hasFeaturedMedia = Boolean(project.featuredMedia);

  return (
    <main className="project-page">

      {/* =====================================================
          PROJECT HERO
      ===================================================== */}

      <section className="project-page-hero">

        <div className="project-page-topbar">
          <a href="#projects" className="project-back">
            ← Back to Projects
          </a>

          <span>{project.year}</span>
        </div>

        <div className="project-page-heading">

          <div className="project-page-heading-left">

            <p className="project-page-category">
              {project.category.toUpperCase()}
            </p>

            <h1>{project.title}</h1>

          </div>

          <span className="project-page-number">
            {project.number}
          </span>

        </div>

        <div className="project-page-intro">

          <p>
            {project.shortDescription}
          </p>

          <div className="project-page-actions">

            {hasLiveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="button primary"
              >
                Live Demo ↗
              </a>
            )}

            {typeof hasGitHub === "string" && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="button secondary"
              >
                GitHub ↗
              </a>
            )}

            {hasGitHub &&
              typeof hasGitHub === "object" && (
                <>
                  {project.github.frontend && (
                    <a
                      href={project.github.frontend}
                      target="_blank"
                      rel="noreferrer"
                      className="button secondary"
                    >
                      Frontend ↗
                    </a>
                  )}

                  {project.github.backend && (
                    <a
                      href={project.github.backend}
                      target="_blank"
                      rel="noreferrer"
                      className="button secondary"
                    >
                      Backend ↗
                    </a>
                  )}
                </>
              )}

          </div>

        </div>

        <div className="project-page-tech">

          {project.technologies.map(
            (technology) => (
              <span key={technology}>
                {technology}
              </span>
            )
          )}

        </div>

      </section>


      {/* =====================================================
          HERO MEDIA
      ===================================================== */}

      <section className="project-showcase">

        {project.image ? (

          <button
            type="button"
            className="project-showcase-button"
            onClick={() =>
              setSelectedImage({
                src: project.image,
                title: project.title,
              })
            }
          >

            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="project-showcase-image"
            />

            <span className="image-expand-hint">
              Click to expand ↗
            </span>

          </button>

        ) : (

          <div className="project-showcase-placeholder">

            <span>{project.number}</span>

            <div>
              <p>PROJECT CASE STUDY</p>
              <strong>{project.title}</strong>
            </div>

          </div>

        )}

      </section>


      {/* =====================================================
          FEATURED TECHNICAL MEDIA
      ===================================================== */}

      {hasFeaturedMedia && (

        <section className="project-featured-media">

          <div className="project-featured-header">

            <div>
              <p>
                {project.featuredMedia.eyebrow}
              </p>

              <h2>
                {project.featuredMedia.title}
              </h2>
            </div>

            <div className="project-featured-metric">
              <strong>
                {project.featuredMedia.metric}
              </strong>

              <span>
                {project.featuredMedia.metricLabel}
              </span>
            </div>

          </div>

          <button
            type="button"
            className="project-featured-image-button"
            onClick={() =>
              setSelectedImage({
                src:
                  project.featuredMedia.image,
                title:
                  project.featuredMedia.title,
              })
            }
          >

            <img
              src={project.featuredMedia.image}
              alt={
                project.featuredMedia.title
              }
              className="project-featured-image"
            />

            <span className="image-expand-hint">
              Click to expand ↗
            </span>

          </button>

          <p className="project-featured-description">
            {project.featuredMedia.description}
          </p>

        </section>

      )}


      {/* =====================================================
          OVERVIEW
      ===================================================== */}

      <section className="project-case-section">

        <div className="project-case-label">
          <span>01</span>
          <p>OVERVIEW</p>
        </div>

        <div className="project-case-content">

          <p className="project-case-lead">
            {project.overview}
          </p>

        </div>

      </section>


      {/* =====================================================
          PROBLEM
      ===================================================== */}

      <section className="project-case-section">

        <div className="project-case-label">
          <span>02</span>
          <p>THE PROBLEM</p>
        </div>

        <div className="project-case-content">

          <h2>
            What needed solving?
          </h2>

          <p>
            {project.problem}
          </p>

        </div>

      </section>


      {/* =====================================================
          SOLUTION
      ===================================================== */}

      <section className="project-case-section">

        <div className="project-case-label">
          <span>03</span>
          <p>THE SOLUTION</p>
        </div>

        <div className="project-case-content">

          <h2>
            How I approached it.
          </h2>

          <p>
            {project.solution}
          </p>

        </div>

      </section>


      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section className="project-case-section">

        <div className="project-case-label">
          <span>04</span>
          <p>KEY FEATURES</p>
        </div>

        <div className="project-case-content">

          <div className="project-feature-grid">

            {project.features.map(
              (feature, index) => (

                <div
                  className="project-feature"
                  key={feature}
                >

                  <span>
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <p>{feature}</p>

                </div>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          HIGHLIGHTS
      ===================================================== */}

      <section className="project-case-section">

        <div className="project-case-label">
          <span>05</span>
          <p>HIGHLIGHTS</p>
        </div>

        <div className="project-case-content">

          <h2>
            What came out of it.
          </h2>

          <div className="project-highlight-list">

            {project.highlights.map(
              (highlight) => (

                <div
                  className="project-highlight"
                  key={highlight}
                >

                  <span>↗</span>

                  <p>{highlight}</p>

                </div>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          VIDEO
      ===================================================== */}

      {hasVideo && (

        <section className="project-case-section">

          <div className="project-case-label">
            <span>06</span>
            <p>DEMO</p>
          </div>

          <div className="project-case-content">

            <video
              className="project-video"
              controls
              preload="metadata"
              poster={
                project.videoPoster ||
                undefined
              }
            >

              <source
                src={project.video}
                type="video/mp4"
              />

              Your browser does not support
              the video tag.

            </video>

          </div>

        </section>

      )}


      {/* =====================================================
          GALLERY
      ===================================================== */}

      {hasGallery && (

        <section className="project-case-section">

          <div className="project-case-label">

            <span>
              {hasVideo ? "07" : "06"}
            </span>

            <p>GALLERY</p>

          </div>

          <div className="project-case-content">

            <div className="project-gallery">

              {project.gallery.map(
                (item, index) => (

                  <figure
                    className={`project-gallery-item gallery-item-${
                      index + 1
                    }`}
                    key={`${project.id}-${index}`}
                  >

                    <button
                      type="button"
                      className="project-gallery-image-button"
                      onClick={() =>
                        setSelectedImage({
                          src: item.image,
                          title: item.title,
                        })
                      }
                    >

                      <div className="project-gallery-image-wrapper">

                        <img
                          src={item.image}
                          alt={`${project.title} - ${item.title}`}
                          loading="lazy"
                        />

                        <span className="image-expand-hint">
                          Expand ↗
                        </span>

                      </div>

                    </button>

                    <figcaption>

                      <span>
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <div>

                        <strong>
                          {item.title}
                        </strong>

                        <p>
                          {item.description}
                        </p>

                      </div>

                    </figcaption>

                  </figure>

                )
              )}

            </div>

          </div>

        </section>

      )}


      {/* =====================================================
          END
      ===================================================== */}

      <section className="project-page-end">

        <p>END OF CASE STUDY</p>

        <h2>
          {project.title}
        </h2>

        <a
          href="#projects"
          className="button primary"
        >
          Explore More Projects
        </a>

      </section>


      {/* =====================================================
          IMAGE LIGHTBOX
      ===================================================== */}

      {selectedImage && (

        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedImage.title} enlarged image`}
          onClick={() =>
            setSelectedImage(null)
          }
        >

          <button
            type="button"
            className="image-lightbox-close"
            aria-label="Close image"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedImage(null);
            }}
          >
            ×
          </button>

          <div
            className="image-lightbox-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <img
              src={selectedImage.src}
              alt={selectedImage.title}
            />

            <p>
              {selectedImage.title}
            </p>

          </div>

        </div>

      )}

    </main>
  );
}

export default ProjectPage;