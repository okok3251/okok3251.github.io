import SectionPage from "@/components/Section/SectionPage";

const ProjectsPage = () => {
  return (
    <SectionPage
      label="PROJECTS"
      title="상세 프로젝트로 이어지는 작업 모음"
      description="대표 프로젝트를 개별 페이지로 확장하기 전, 전체 프로젝트 목록과 핵심 설명을 정리해둘 수 있는 페이지입니다."
      sections={[
        {
          title: "프로젝트 리스트",
          body: "각 작업의 목적, 맡은 역할, 사용 기술, 결과를 짧고 명확하게 정리해두면 전체 작업 흐름을 빠르게 파악시킬 수 있습니다.",
        },
        {
          title: "다음 확장 방향",
          body: "이후에는 프로젝트별 상세 페이지를 추가해 설계 의도, 구현 포인트, 문제 해결 과정까지 더 깊게 보여줄 수 있습니다.",
        },
      ]}
    />
  );
};

export default ProjectsPage;
