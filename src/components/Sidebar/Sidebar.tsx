import * as S from "@/components/Sidebar/Sidebar.style"
// import { useChatbotStore } from "@/store/useChatbotStore";


const Sidebar = ({
    }) => {
      
      // const useNote : string[] = [
      //   "1. 아래 채팅창에 질문을 입력하세요.",
      //   "2. 급여, 연차 등 인사 관련 모든 정보를 제공합니다."
      // ]

      // const frequentlyQuestion : string[] = [
      //   "",
      // ]

      // const relatedDocuments : string[] = [
      //   "",
      // ]

      // const {clearMessages} = useChatbotStore();

      return (
        <S.SidebarContainer>
          <S.SidebarLogo/>
            {/* <S.NewChatButton onClick={clearMessages}>새 채팅</S.NewChatButton>
          <S.SidebarList $name="사용방법 및 유의사항">
            {useNote.map((item, idx) => (
              <S.SidebarItem key={idx} >
                {item}
              </S.SidebarItem>
            ))}
          </S.SidebarList>

          <S.SidebarList $name="자주 묻는 질문">

          </S.SidebarList>

          <S.SidebarList $name="관련 문서">

          </S.SidebarList> */}
        </S.SidebarContainer>
    );
};

export default Sidebar;
