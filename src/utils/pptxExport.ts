import pptxgen from "pptxgenjs";
import { slidesData } from "../data/slidesData";

export async function exportPresentationToPPTX(onProgress?: (current: number, total: number) => void): Promise<void> {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.title = "Python Placement Training Masterclass";
  pres.author = "Python Placement Trainer";
  pres.company = "Campus Recruitment Training";

  // Color Palette
  const NAVY = "0F172A";       // Slate 900
  const BLUE = "2563EB";       // Blue 600
  const EMERALD = "059669";    // Emerald 600
  const AMBER = "D97706";      // Amber 600
  const ROSE = "E11D48";       // Rose 600
  const DARK_CODE = "1E293B";   // Slate 800
  const CODE_TEXT = "F1F5F9";   // Slate 100
  const GRAY_BG = "F8FAFC";     // Slate 50
  const TEXT_MAIN = "1E293B";   // Slate 800
  const TEXT_MUTED = "64748B";  // Slate 500

  // 1. Title Slide
  const titleSlide = pres.addSlide();
  titleSlide.background = { color: NAVY };

  titleSlide.addText("PYTHON PLACEMENT TRAINING", {
    x: 0.8,
    y: 1.5,
    w: 8.4,
    h: 1.0,
    fontSize: 34,
    bold: true,
    color: "38BDF8", // Sky 400
    fontFace: "Arial"
  });

  titleSlide.addText("Classroom Masterclass for Engineering Campus Technical Interviews", {
    x: 0.8,
    y: 2.6,
    w: 8.4,
    h: 0.6,
    fontSize: 20,
    color: "E2E8F0",
    fontFace: "Arial"
  });

  titleSlide.addText(
    "Covering: Core Fundamentals • Data Structures • OOP • Output Prediction • 50+ Coding Patterns • 100 MCQs\nDesigned for TCS, Infosys, Cognizant, Wipro, Accenture, Zoho & Product Startups",
    {
      x: 0.8,
      y: 3.4,
      w: 8.4,
      h: 1.2,
      fontSize: 14,
      color: "94A3B8",
      fontFace: "Arial"
    }
  );

  titleSlide.addShape(pres.ShapeType.rect, {
    x: 0.8,
    y: 5.0,
    w: 8.4,
    h: 0.05,
    fill: { color: BLUE }
  });

  titleSlide.addText("CONCEPT  →  SYNTAX  →  EXAMPLE  →  OUTPUT  →  INTERVIEW TIP  →  MISTAKES", {
    x: 0.8,
    y: 5.3,
    w: 8.4,
    h: 0.5,
    fontSize: 13,
    bold: true,
    color: "34D399", // Emerald 400
    fontFace: "Arial"
  });

  titleSlide.addNotes(
    "Trainer Note: Welcome students to the Python Technical Placement Masterclass. Emphasize that this course is targeted directly at cracking first-round technical screenings and coding assessments."
  );

  // 2. Loop through all 72 Slides
  const total = slidesData.length;

  for (let i = 0; i < total; i++) {
    const s = slidesData[i];
    if (onProgress) {
      onProgress(i + 1, total);
    }

    const slide = pres.addSlide();
    slide.background = { color: GRAY_BG };

    // Section Category Pill
    slide.addText(s.section.toUpperCase(), {
      x: 0.8,
      y: 0.4,
      w: 6.0,
      h: 0.35,
      fontSize: 10,
      bold: true,
      color: BLUE,
      fontFace: "Arial"
    });

    // Slide Number in header
    slide.addText(`Slide ${s.slideNumber} / ${total}`, {
      x: 8.0,
      y: 0.4,
      w: 1.5,
      h: 0.35,
      fontSize: 10,
      align: "right",
      color: TEXT_MUTED,
      fontFace: "Arial"
    });

    // Main Slide Title
    slide.addText(s.title, {
      x: 0.8,
      y: 0.75,
      w: 8.5,
      h: 0.65,
      fontSize: 22,
      bold: true,
      color: NAVY,
      fontFace: "Arial"
    });

    // Divider line
    slide.addShape(pres.ShapeType.rect, {
      x: 0.8,
      y: 1.45,
      w: 8.4,
      h: 0.02,
      fill: { color: "CBD5E1" }
    });

    const hasCode = !!s.codeSnippet;

    if (hasCode) {
      // Left Column: Bullet Points & Callouts (Width 4.6 in)
      const bulletsFormatted = s.bullets.map((b) => ({
        text: `• ${b}\n\n`,
        options: { fontSize: 12, color: TEXT_MAIN, fontFace: "Arial" }
      }));

      slide.addText(bulletsFormatted, {
        x: 0.8,
        y: 1.6,
        w: 4.4,
        h: 2.8,
        align: "left"
      });

      // Right Column: Code Snippet Box (Width 3.8 in)
      slide.addShape(pres.ShapeType.roundRect, {
        x: 5.4,
        y: 1.6,
        w: 3.8,
        h: s.output ? 2.5 : 3.8,
        fill: { color: DARK_CODE },
        line: { color: "334155", width: 1 }
      });

      slide.addText("PYTHON CODE", {
        x: 5.55,
        y: 1.65,
        w: 3.5,
        h: 0.3,
        fontSize: 9,
        bold: true,
        color: "94A3B8",
        fontFace: "Arial"
      });

      slide.addText(s.codeSnippet || "", {
        x: 5.55,
        y: 1.95,
        w: 3.5,
        h: s.output ? 2.0 : 3.3,
        fontSize: 10,
        color: CODE_TEXT,
        fontFace: "Courier New"
      });

      // Output Box if present
      if (s.output) {
        slide.addShape(pres.ShapeType.roundRect, {
          x: 5.4,
          y: 4.2,
          w: 3.8,
          h: 1.25,
          fill: { color: "0F172A" },
          line: { color: "334155", width: 1 }
        });

        slide.addText("EXPECTED OUTPUT", {
          x: 5.55,
          y: 4.25,
          w: 3.5,
          h: 0.25,
          fontSize: 9,
          bold: true,
          color: "34D399",
          fontFace: "Arial"
        });

        slide.addText(s.output, {
          x: 5.55,
          y: 4.5,
          w: 3.5,
          h: 0.85,
          fontSize: 9.5,
          color: "A7F3D0",
          fontFace: "Courier New"
        });
      }

      // Callout Banner at Bottom Left
      if (s.calloutType && s.calloutText) {
        const calloutColor =
          s.calloutType === "COMMON MISTAKE"
            ? AMBER
            : s.calloutType === "PLACEMENT TIP"
            ? EMERALD
            : s.calloutType === "INTERVIEW TIP"
            ? BLUE
            : ROSE;

        slide.addShape(pres.ShapeType.roundRect, {
          x: 0.8,
          y: 4.6,
          w: 4.4,
          h: 0.85,
          fill: { color: "FFFFFF" },
          line: { color: calloutColor, width: 1.5 }
        });

        slide.addText(`[${s.calloutType}] ${s.calloutText}`, {
          x: 0.95,
          y: 4.65,
          w: 4.1,
          h: 0.75,
          fontSize: 10.5,
          bold: true,
          color: calloutColor,
          fontFace: "Arial"
        });
      }
    } else {
      // Full Width layout without code
      const bulletsFormatted = s.bullets.map((b) => ({
        text: `• ${b}\n\n`,
        options: { fontSize: 14, color: TEXT_MAIN, fontFace: "Arial" }
      }));

      slide.addText(bulletsFormatted, {
        x: 0.8,
        y: 1.7,
        w: 8.4,
        h: 2.7,
        align: "left"
      });

      if (s.interviewPoints) {
        slide.addShape(pres.ShapeType.roundRect, {
          x: 0.8,
          y: 4.5,
          w: 8.4,
          h: 0.8,
          fill: { color: "EFF6FF" },
          line: { color: BLUE, width: 1 }
        });

        slide.addText(`INTERVIEW INSIGHT: ${s.interviewPoints}`, {
          x: 1.0,
          y: 4.55,
          w: 8.0,
          h: 0.7,
          fontSize: 11,
          bold: true,
          color: BLUE,
          fontFace: "Arial"
        });
      }

      if (s.calloutType && s.calloutText) {
        const calloutColor =
          s.calloutType === "COMMON MISTAKE"
            ? AMBER
            : s.calloutType === "PLACEMENT TIP"
            ? EMERALD
            : ROSE;

        slide.addShape(pres.ShapeType.roundRect, {
          x: 0.8,
          y: s.interviewPoints ? 5.35 : 4.6,
          w: 8.4,
          h: 0.7,
          fill: { color: "FFFFFF" },
          line: { color: calloutColor, width: 1.5 }
        });

        slide.addText(`[${s.calloutType}] ${s.calloutText}`, {
          x: 1.0,
          y: (s.interviewPoints ? 5.35 : 4.6) + 0.05,
          w: 8.0,
          h: 0.6,
          fontSize: 11,
          bold: true,
          color: calloutColor,
          fontFace: "Arial"
        });
      }
    }

    // Attach Trainer Notes for PowerPoint Presenter View!
    if (s.trainerNote) {
      slide.addNotes(`TRAINER CLASSROOM NOTE:\n${s.trainerNote}`);
    }
  }

  // 3. Final Conclusion Slide
  const endSlide = pres.addSlide();
  endSlide.background = { color: NAVY };

  endSlide.addText("CONGRATULATIONS & BEST WISHES!", {
    x: 0.8,
    y: 2.0,
    w: 8.4,
    h: 0.8,
    fontSize: 32,
    bold: true,
    color: "34D399",
    fontFace: "Arial"
  });

  endSlide.addText("You are now equipped with core Python placement fundamentals.", {
    x: 0.8,
    y: 2.9,
    w: 8.4,
    h: 0.6,
    fontSize: 20,
    color: "E2E8F0",
    fontFace: "Arial"
  });

  endSlide.addText(
    "Next Steps: Complete the 100 MCQs, practice all 50 Coding Problems, and take the 60-Minute Mock Assessment.\nConsistency + Speed + Clean Logic = Campus Selection!",
    {
      x: 0.8,
      y: 3.7,
      w: 8.4,
      h: 1.0,
      fontSize: 15,
      color: "94A3B8",
      fontFace: "Arial"
    }
  );

  // Write and trigger download in browser
  await pres.writeFile({ fileName: "Python_Placement_Masterclass_Complete_Classroom_Presentation.pptx" });
}
