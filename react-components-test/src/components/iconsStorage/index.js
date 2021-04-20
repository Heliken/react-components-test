import styled from 'styled-components';

const StyledIconsStorage = styled.div`
  display: none;
`;

const IconsStorage = () => {
  return(
    <StyledIconsStorage>
      <svg xmlns="http://www.w3.org/2000/svg">
        <symbol id="chevron" viewBox='0 0 24 24'>
          <path d="M15 18L9 12L15 6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </symbol>
        <symbol id="clock" viewBox='0 0 18 18'>
          <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 4.5V9L12 10.5" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </symbol>
        <symbol id="user-check" viewBox='0 0 20 20'>
          <path d="M11.0833 10.1833C11.528 9.79844 11.8846 9.32239 12.1291 8.78751C12.3735 8.25262 12.5 7.67141 12.5 7.08332C12.5 5.97825 12.061 4.91845 11.2796 4.13705C10.4982 3.35564 9.43839 2.91666 8.33332 2.91666C7.22825 2.91666 6.16845 3.35564 5.38705 4.13705C4.60564 4.91845 4.16666 5.97825 4.16666 7.08332C4.16665 7.67141 4.29316 8.25262 4.53759 8.78751C4.78203 9.32239 5.13868 9.79844 5.58332 10.1833C4.41677 10.7116 3.42704 11.5646 2.73247 12.6404C2.0379 13.7163 1.66788 14.9694 1.66666 16.25C1.66666 16.471 1.75445 16.683 1.91073 16.8392C2.06701 16.9955 2.27898 17.0833 2.49999 17.0833C2.721 17.0833 2.93297 16.9955 3.08925 16.8392C3.24553 16.683 3.33332 16.471 3.33332 16.25C3.33332 14.9239 3.86011 13.6521 4.79779 12.7145C5.73547 11.7768 7.00724 11.25 8.33332 11.25C9.65941 11.25 10.9312 11.7768 11.8689 12.7145C12.8065 13.6521 13.3333 14.9239 13.3333 16.25C13.3333 16.471 13.4211 16.683 13.5774 16.8392C13.7337 16.9955 13.9456 17.0833 14.1667 17.0833C14.3877 17.0833 14.5996 16.9955 14.7559 16.8392C14.9122 16.683 15 16.471 15 16.25C14.9988 14.9694 14.6287 13.7163 13.9342 12.6404C13.2396 11.5646 12.2499 10.7116 11.0833 10.1833ZM8.33332 9.58332C7.83887 9.58332 7.35552 9.4367 6.9444 9.162C6.53327 8.88729 6.21284 8.49685 6.02362 8.04003C5.83441 7.58322 5.7849 7.08055 5.88136 6.5956C5.97782 6.11065 6.21593 5.66519 6.56556 5.31556C6.91519 4.96593 7.36065 4.72782 7.8456 4.63136C8.33055 4.5349 8.83322 4.58441 9.29003 4.77362C9.74685 4.96284 10.1373 5.28327 10.412 5.6944C10.6867 6.10552 10.8333 6.58887 10.8333 7.08332C10.8333 7.74637 10.5699 8.38225 10.1011 8.85109C9.63225 9.31993 8.99636 9.58332 8.33332 9.58332ZM18.0917 7.60832C18.0142 7.53022 17.922 7.46822 17.8205 7.42591C17.7189 7.38361 17.61 7.36182 17.5 7.36182C17.39 7.36182 17.2811 7.38361 17.1795 7.42591C17.078 7.46822 16.9858 7.53022 16.9083 7.60832L15.2417 9.27499L14.725 8.74999C14.6475 8.67188 14.5554 8.60989 14.4538 8.56758C14.3523 8.52527 14.2433 8.50349 14.1333 8.50349C14.0233 8.50349 13.9144 8.52527 13.8128 8.56758C13.7113 8.60989 13.6191 8.67188 13.5417 8.74999C13.3864 8.90613 13.2993 9.11734 13.2993 9.33749C13.2993 9.55765 13.3864 9.76886 13.5417 9.92499L14.6583 11.0417C14.8145 11.1969 15.0257 11.284 15.2458 11.284C15.466 11.284 15.6772 11.1969 15.8333 11.0417L18.0583 8.81666C18.1425 8.74109 18.2103 8.64919 18.2578 8.54656C18.3053 8.44392 18.3314 8.33269 18.3345 8.21965C18.3376 8.10661 18.3177 7.99411 18.276 7.88901C18.2342 7.78391 18.1715 7.68841 18.0917 7.60832Z"/>
        </symbol>
        <symbol id="file-search-alt" viewBox='0 0 20 20'>
          <path d="M10 16.6667H4.16669C3.94567 16.6667 3.73371 16.5789 3.57743 16.4226C3.42115 16.2663 3.33335 16.0544 3.33335 15.8333V4.16667C3.33335 3.94566 3.42115 3.7337 3.57743 3.57742C3.73371 3.42114 3.94567 3.33334 4.16669 3.33334H8.33335V5.83334C8.33335 6.49638 8.59675 7.13227 9.06559 7.60111C9.53443 8.06995 10.1703 8.33334 10.8334 8.33334H13.3334V9.16667C13.3334 9.38769 13.4212 9.59965 13.5774 9.75593C13.7337 9.91221 13.9457 10 14.1667 10C14.3877 10 14.5997 9.91221 14.7559 9.75593C14.9122 9.59965 15 9.38769 15 9.16667V7.50001C15 7.50001 15 7.50001 15 7.45001C14.9913 7.37345 14.9746 7.29803 14.95 7.22501V7.15001C14.91 7.06432 14.8565 6.98556 14.7917 6.91667L9.79169 1.91667C9.7228 1.85185 9.64404 1.79841 9.55835 1.75834C9.53348 1.75481 9.50823 1.75481 9.48335 1.75834C9.3987 1.70979 9.30521 1.67863 9.20835 1.66667H4.16669C3.50365 1.66667 2.86776 1.93006 2.39892 2.3989C1.93008 2.86775 1.66669 3.50363 1.66669 4.16667V15.8333C1.66669 16.4964 1.93008 17.1323 2.39892 17.6011C2.86776 18.0699 3.50365 18.3333 4.16669 18.3333H10C10.221 18.3333 10.433 18.2455 10.5893 18.0893C10.7456 17.933 10.8334 17.721 10.8334 17.5C10.8334 17.279 10.7456 17.067 10.5893 16.9107C10.433 16.7545 10.221 16.6667 10 16.6667ZM10 4.50834L12.1584 6.66667H10.8334C10.6123 6.66667 10.4004 6.57887 10.2441 6.42259C10.0878 6.26631 10 6.05435 10 5.83334V4.50834ZM5.83335 6.66667C5.61234 6.66667 5.40038 6.75447 5.2441 6.91075C5.08782 7.06703 5.00002 7.27899 5.00002 7.50001C5.00002 7.72102 5.08782 7.93298 5.2441 8.08926C5.40038 8.24554 5.61234 8.33334 5.83335 8.33334H6.66669C6.8877 8.33334 7.09966 8.24554 7.25594 8.08926C7.41222 7.93298 7.50002 7.72102 7.50002 7.50001C7.50002 7.27899 7.41222 7.06703 7.25594 6.91075C7.09966 6.75447 6.8877 6.66667 6.66669 6.66667H5.83335ZM18.0917 16.9083L17.1167 15.9417C17.4283 15.3977 17.5531 14.7666 17.4718 14.145C17.3905 13.5234 17.1077 12.9456 16.6667 12.5C16.2609 12.0797 15.7379 11.7914 15.1659 11.6726C14.5939 11.5538 13.9993 11.6101 13.4597 11.834C12.9201 12.0579 12.4605 12.4392 12.1407 12.9281C11.8208 13.417 11.6557 13.9909 11.6667 14.575C11.6638 15.0777 11.7924 15.5723 12.0397 16.01C12.287 16.4476 12.6444 16.813 13.0765 17.0698C13.5085 17.3267 14.0003 17.4662 14.5028 17.4744C15.0054 17.4826 15.5015 17.3593 15.9417 17.1167L16.9084 18.0917C16.9858 18.1698 17.078 18.2318 17.1795 18.2741C17.2811 18.3164 17.39 18.3382 17.5 18.3382C17.61 18.3382 17.719 18.3164 17.8205 18.2741C17.9221 18.2318 18.0142 18.1698 18.0917 18.0917C18.1698 18.0142 18.2318 17.922 18.2741 17.8205C18.3164 17.7189 18.3382 17.61 18.3382 17.5C18.3382 17.39 18.3164 17.2811 18.2741 17.1795C18.2318 17.078 18.1698 16.9858 18.0917 16.9083ZM15.45 15.45C15.212 15.6738 14.8976 15.7985 14.5709 15.7985C14.2441 15.7985 13.9297 15.6738 13.6917 15.45C13.4623 15.2165 13.3336 14.9023 13.3334 14.575C13.3316 14.4106 13.3632 14.2476 13.4263 14.0958C13.4893 13.944 13.5824 13.8065 13.7 13.6917C13.9222 13.4707 14.2201 13.3426 14.5334 13.3333C14.7018 13.323 14.8706 13.3476 15.0292 13.4055C15.1877 13.4635 15.3325 13.5536 15.4546 13.6702C15.5767 13.7868 15.6733 13.9273 15.7385 14.083C15.8037 14.2387 15.836 14.4062 15.8334 14.575C15.8265 14.9059 15.6886 15.2206 15.45 15.45ZM10.8334 10H5.83335C5.61234 10 5.40038 10.0878 5.2441 10.2441C5.08782 10.4004 5.00002 10.6123 5.00002 10.8333C5.00002 11.0544 5.08782 11.2663 5.2441 11.4226C5.40038 11.5789 5.61234 11.6667 5.83335 11.6667H10.8334C11.0544 11.6667 11.2663 11.5789 11.4226 11.4226C11.5789 11.2663 11.6667 11.0544 11.6667 10.8333C11.6667 10.6123 11.5789 10.4004 11.4226 10.2441C11.2663 10.0878 11.0544 10 10.8334 10ZM9.16669 15C9.3877 15 9.59966 14.9122 9.75594 14.7559C9.91222 14.5996 10 14.3877 10 14.1667C10 13.9457 9.91222 13.7337 9.75594 13.5774C9.59966 13.4211 9.3877 13.3333 9.16669 13.3333H5.83335C5.61234 13.3333 5.40038 13.4211 5.2441 13.5774C5.08782 13.7337 5.00002 13.9457 5.00002 14.1667C5.00002 14.3877 5.08782 14.5996 5.2441 14.7559C5.40038 14.9122 5.61234 15 5.83335 15H9.16669Z"/>
        </symbol>
        <symbol id="wrench" viewBox='0 0 20 20'>
          <path d="M18.0917 12.9833L14.325 9.225C14.4038 8.84115 14.4429 8.4502 14.4417 8.05834C14.4414 6.98388 14.1702 5.92684 13.6533 4.98491C13.1363 4.04298 12.3903 3.24657 11.4841 2.66929C10.5779 2.09201 9.54078 1.75249 8.46863 1.68212C7.39648 1.61175 6.32389 1.81279 5.35 2.26667C5.22662 2.32304 5.11885 2.40867 5.03608 2.51614C4.9533 2.6236 4.89801 2.74965 4.875 2.88334C4.85209 3.01533 4.86133 3.15089 4.90195 3.27855C4.94257 3.40621 5.01336 3.52219 5.10834 3.61667L8.73334 7.23334L7.23334 8.73334L3.61667 5.10834C3.52139 5.01484 3.40505 4.9456 3.27743 4.90644C3.14981 4.86729 3.01465 4.85936 2.88334 4.88334C2.75049 4.9055 2.62499 4.95953 2.51759 5.04081C2.41019 5.12208 2.32409 5.22818 2.26667 5.35C1.81127 6.32709 1.6104 7.40349 1.68274 8.47906C1.75509 9.55463 2.09829 10.5944 2.68043 11.5017C3.26257 12.409 4.06473 13.1544 5.01229 13.6684C5.95985 14.1824 7.02202 14.4484 8.1 14.4417C8.49186 14.4429 8.88281 14.4038 9.26667 14.325L13.025 18.0917C13.1025 18.1698 13.1946 18.2318 13.2962 18.2741C13.3977 18.3164 13.5067 18.3382 13.6167 18.3382C13.7267 18.3382 13.8356 18.3164 13.9372 18.2741C14.0387 18.2318 14.1309 18.1698 14.2083 18.0917C14.2864 18.0142 14.3484 17.922 14.3907 17.8205C14.4331 17.7189 14.4548 17.61 14.4548 17.5C14.4548 17.39 14.4331 17.2811 14.3907 17.1795C14.3484 17.078 14.2864 16.9858 14.2083 16.9083L10.125 12.825C10.023 12.7236 9.89642 12.6504 9.75769 12.6124C9.61897 12.5745 9.47277 12.5731 9.33334 12.6083C8.93098 12.7161 8.51653 12.7721 8.1 12.775C7.47671 12.7805 6.85849 12.6626 6.28095 12.4282C5.70342 12.1937 5.17798 11.8473 4.73491 11.4088C4.29184 10.9704 3.9399 10.4487 3.69935 9.87363C3.4588 9.2986 3.33441 8.68165 3.33334 8.05834C3.33226 7.77919 3.35456 7.50043 3.4 7.225L6.66667 10.5C6.74414 10.5781 6.83631 10.6401 6.93785 10.6824C7.0394 10.7247 7.14833 10.7465 7.25834 10.7465C7.36835 10.7465 7.47727 10.7247 7.57882 10.6824C7.68037 10.6401 7.77253 10.5781 7.85 10.5L10.5 7.825C10.6502 7.66962 10.7342 7.46195 10.7342 7.24584C10.7342 7.02972 10.6502 6.82206 10.5 6.66667L7.25834 3.4C7.53382 3.35501 7.81253 3.33272 8.09167 3.33334C9.34337 3.33555 10.5431 3.83433 11.4274 4.7202C12.3117 5.60607 12.8083 6.80663 12.8083 8.05834C12.8054 8.47486 12.7494 8.88931 12.6417 9.29167C12.6064 9.43111 12.6078 9.5773 12.6458 9.71603C12.6837 9.85476 12.757 9.9813 12.8583 10.0833L16.9417 14.1667C17.0986 14.3236 17.3114 14.4117 17.5333 14.4117C17.7553 14.4117 17.9681 14.3236 18.125 14.1667C18.2819 14.0098 18.3701 13.7969 18.3701 13.575C18.3701 13.3531 18.2819 13.1403 18.125 12.9833H18.0917Z"/>
        </symbol>
        <symbol id="clipboard" viewBox='0 0 20 20'>
          <path d="M12.5 11.6667H7.49998C7.27897 11.6667 7.067 11.7545 6.91072 11.9107C6.75444 12.067 6.66665 12.279 6.66665 12.5C6.66665 12.721 6.75444 12.933 6.91072 13.0892C7.067 13.2455 7.27897 13.3333 7.49998 13.3333H12.5C12.721 13.3333 12.933 13.2455 13.0892 13.0892C13.2455 12.933 13.3333 12.721 13.3333 12.5C13.3333 12.279 13.2455 12.067 13.0892 11.9107C12.933 11.7545 12.721 11.6667 12.5 11.6667ZM12.5 8.33332H9.16665C8.94563 8.33332 8.73367 8.42112 8.57739 8.5774C8.42111 8.73368 8.33331 8.94564 8.33331 9.16666C8.33331 9.38767 8.42111 9.59963 8.57739 9.75591C8.73367 9.91219 8.94563 9.99999 9.16665 9.99999H12.5C12.721 9.99999 12.933 9.91219 13.0892 9.75591C13.2455 9.59963 13.3333 9.38767 13.3333 9.16666C13.3333 8.94564 13.2455 8.73368 13.0892 8.5774C12.933 8.42112 12.721 8.33332 12.5 8.33332ZM14.1666 3.33332H13.1833C13.0114 2.84703 12.6933 2.42582 12.2725 2.12744C11.8518 1.82906 11.3491 1.66811 10.8333 1.66666H9.16665C8.65086 1.66811 8.14815 1.82906 7.72743 2.12744C7.3067 2.42582 6.98857 2.84703 6.81665 3.33332H5.83331C5.17027 3.33332 4.53439 3.59672 4.06555 4.06556C3.59671 4.5344 3.33331 5.17028 3.33331 5.83332V15.8333C3.33331 16.4964 3.59671 17.1322 4.06555 17.6011C4.53439 18.0699 5.17027 18.3333 5.83331 18.3333H14.1666C14.8297 18.3333 15.4656 18.0699 15.9344 17.6011C16.4033 17.1322 16.6666 16.4964 16.6666 15.8333V5.83332C16.6666 5.17028 16.4033 4.5344 15.9344 4.06556C15.4656 3.59672 14.8297 3.33332 14.1666 3.33332ZM8.33331 4.16666C8.33331 3.94564 8.42111 3.73368 8.57739 3.5774C8.73367 3.42112 8.94563 3.33332 9.16665 3.33332H10.8333C11.0543 3.33332 11.2663 3.42112 11.4226 3.5774C11.5788 3.73368 11.6666 3.94564 11.6666 4.16666V4.99999H8.33331V4.16666ZM15 15.8333C15 16.0543 14.9122 16.2663 14.7559 16.4226C14.5996 16.5789 14.3877 16.6667 14.1666 16.6667H5.83331C5.6123 16.6667 5.40034 16.5789 5.24406 16.4226C5.08778 16.2663 4.99998 16.0543 4.99998 15.8333V5.83332C4.99998 5.61231 5.08778 5.40035 5.24406 5.24407C5.40034 5.08779 5.6123 4.99999 5.83331 4.99999H6.66665V5.83332C6.66665 6.05434 6.75444 6.2663 6.91072 6.42258C7.067 6.57886 7.27897 6.66666 7.49998 6.66666H12.5C12.721 6.66666 12.933 6.57886 13.0892 6.42258C13.2455 6.2663 13.3333 6.05434 13.3333 5.83332V4.99999H14.1666C14.3877 4.99999 14.5996 5.08779 14.7559 5.24407C14.9122 5.40035 15 5.61231 15 5.83332V15.8333Z"/>
        </symbol>
        <symbol id="operations" viewBox='0 0 20 20'>
          <path d="M10 4.99999C9.77901 4.99999 9.56705 5.08779 9.41077 5.24407C9.25449 5.40035 9.16669 5.61231 9.16669 5.83332V14.1667C9.16669 14.3877 9.25449 14.5996 9.41077 14.7559C9.56705 14.9122 9.77901 15 10 15C10.221 15 10.433 14.9122 10.5893 14.7559C10.7456 14.5996 10.8334 14.3877 10.8334 14.1667V5.83332C10.8334 5.61231 10.7456 5.40035 10.5893 5.24407C10.433 5.08779 10.221 4.99999 10 4.99999ZM5.83335 9.99999C5.61234 9.99999 5.40038 10.0878 5.2441 10.2441C5.08782 10.4003 5.00002 10.6123 5.00002 10.8333V14.1667C5.00002 14.3877 5.08782 14.5996 5.2441 14.7559C5.40038 14.9122 5.61234 15 5.83335 15C6.05437 15 6.26633 14.9122 6.42261 14.7559C6.57889 14.5996 6.66669 14.3877 6.66669 14.1667V10.8333C6.66669 10.6123 6.57889 10.4003 6.42261 10.2441C6.26633 10.0878 6.05437 9.99999 5.83335 9.99999ZM14.1667 8.33332C13.9457 8.33332 13.7337 8.42112 13.5774 8.5774C13.4212 8.73368 13.3334 8.94564 13.3334 9.16666V14.1667C13.3334 14.3877 13.4212 14.5996 13.5774 14.7559C13.7337 14.9122 13.9457 15 14.1667 15C14.3877 15 14.5997 14.9122 14.7559 14.7559C14.9122 14.5996 15 14.3877 15 14.1667V9.16666C15 8.94564 14.9122 8.73368 14.7559 8.5774C14.5997 8.42112 14.3877 8.33332 14.1667 8.33332ZM15.8334 1.66666H4.16669C3.50365 1.66666 2.86776 1.93005 2.39892 2.39889C1.93008 2.86773 1.66669 3.50362 1.66669 4.16666V15.8333C1.66669 16.4964 1.93008 17.1322 2.39892 17.6011C2.86776 18.0699 3.50365 18.3333 4.16669 18.3333H15.8334C16.4964 18.3333 17.1323 18.0699 17.6011 17.6011C18.07 17.1322 18.3334 16.4964 18.3334 15.8333V4.16666C18.3334 3.50362 18.07 2.86773 17.6011 2.39889C17.1323 1.93005 16.4964 1.66666 15.8334 1.66666ZM16.6667 15.8333C16.6667 16.0543 16.5789 16.2663 16.4226 16.4226C16.2663 16.5789 16.0544 16.6667 15.8334 16.6667H4.16669C3.94567 16.6667 3.73371 16.5789 3.57743 16.4226C3.42115 16.2663 3.33335 16.0543 3.33335 15.8333V4.16666C3.33335 3.94564 3.42115 3.73368 3.57743 3.5774C3.73371 3.42112 3.94567 3.33332 4.16669 3.33332H15.8334C16.0544 3.33332 16.2663 3.42112 16.4226 3.5774C16.5789 3.73368 16.6667 3.94564 16.6667 4.16666V15.8333Z"/>
        </symbol>
        <symbol id="users" viewBox='0 0 20 20'>
          <path d="M10.25 10.1833C10.6946 9.79844 11.0513 9.32239 11.2957 8.78751C11.5401 8.25262 11.6667 7.67141 11.6666 7.08332C11.6666 5.97825 11.2277 4.91845 10.4463 4.13705C9.66486 3.35564 8.60505 2.91666 7.49998 2.91666C6.39491 2.91666 5.3351 3.35564 4.5537 4.13705C3.7723 4.91845 3.33331 5.97825 3.33331 7.08332C3.33331 7.67141 3.45981 8.25262 3.70425 8.78751C3.94869 9.32239 4.30533 9.79844 4.74998 10.1833C3.58343 10.7116 2.5937 11.5646 1.89913 12.6404C1.20456 13.7163 0.83454 14.9694 0.833313 16.25C0.833313 16.471 0.92111 16.683 1.07739 16.8392C1.23367 16.9955 1.44563 17.0833 1.66665 17.0833C1.88766 17.0833 2.09962 16.9955 2.2559 16.8392C2.41218 16.683 2.49998 16.471 2.49998 16.25C2.49998 14.9239 3.02676 13.6521 3.96445 12.7145C4.90213 11.7768 6.1739 11.25 7.49998 11.25C8.82606 11.25 10.0978 11.7768 11.0355 12.7145C11.9732 13.6521 12.5 14.9239 12.5 16.25C12.5 16.471 12.5878 16.683 12.7441 16.8392C12.9003 16.9955 13.1123 17.0833 13.3333 17.0833C13.5543 17.0833 13.7663 16.9955 13.9226 16.8392C14.0788 16.683 14.1666 16.471 14.1666 16.25C14.1654 14.9694 13.7954 13.7163 13.1008 12.6404C12.4063 11.5646 11.4165 10.7116 10.25 10.1833ZM7.49998 9.58332C7.00553 9.58332 6.52218 9.4367 6.11105 9.162C5.69993 8.88729 5.3795 8.49685 5.19028 8.04003C5.00106 7.58322 4.95155 7.08055 5.04802 6.5956C5.14448 6.11065 5.38258 5.66519 5.73221 5.31556C6.08184 4.96593 6.5273 4.72782 7.01225 4.63136C7.49721 4.5349 7.99987 4.58441 8.45669 4.77362C8.9135 4.96284 9.30395 5.28328 9.57865 5.6944C9.85336 6.10552 9.99998 6.58887 9.99998 7.08332C9.99998 7.74637 9.73659 8.38225 9.26775 8.85109C8.79891 9.31993 8.16302 9.58332 7.49998 9.58332ZM15.6166 9.84999C16.15 9.24943 16.4983 8.50754 16.6198 7.71361C16.7413 6.91968 16.6308 6.10755 16.3015 5.37499C15.9721 4.64243 15.4381 4.02065 14.7637 3.58451C14.0893 3.14836 13.3032 2.91644 12.5 2.91666C12.279 2.91666 12.067 3.00445 11.9107 3.16073C11.7544 3.31701 11.6666 3.52898 11.6666 3.74999C11.6666 3.971 11.7544 4.18297 11.9107 4.33925C12.067 4.49553 12.279 4.58332 12.5 4.58332C13.163 4.58332 13.7989 4.84672 14.2677 5.31556C14.7366 5.7844 15 6.42028 15 7.08332C14.9988 7.52102 14.8827 7.95074 14.6634 8.32951C14.444 8.70827 14.129 9.02281 13.75 9.24166C13.6264 9.31292 13.5232 9.41471 13.4503 9.53727C13.3773 9.65984 13.3371 9.79907 13.3333 9.94166C13.3298 10.0831 13.3624 10.2232 13.428 10.3485C13.4936 10.4739 13.5901 10.5805 13.7083 10.6583L14.0333 10.875L14.1416 10.9333C15.1461 11.4098 15.9936 12.1633 16.5841 13.1053C17.1747 14.0472 17.4838 15.1383 17.475 16.25C17.475 16.471 17.5628 16.683 17.7191 16.8392C17.8753 16.9955 18.0873 17.0833 18.3083 17.0833C18.5293 17.0833 18.7413 16.9955 18.8976 16.8392C19.0538 16.683 19.1416 16.471 19.1416 16.25C19.1485 14.9712 18.8282 13.7119 18.2112 12.5917C17.5942 11.4715 16.7011 10.5278 15.6166 9.84999Z"/>
        </symbol>
        <symbol id="dashboard" viewBox='0 0 20 20'>
          <path d="M8.33333 10.8333H3.33333C3.11232 10.8333 2.90036 10.9211 2.74408 11.0774C2.5878 11.2337 2.5 11.4457 2.5 11.6667V16.6667C2.5 16.8877 2.5878 17.0996 2.74408 17.2559C2.90036 17.4122 3.11232 17.5 3.33333 17.5H8.33333C8.55435 17.5 8.76631 17.4122 8.92259 17.2559C9.07887 17.0996 9.16667 16.8877 9.16667 16.6667V11.6667C9.16667 11.4457 9.07887 11.2337 8.92259 11.0774C8.76631 10.9211 8.55435 10.8333 8.33333 10.8333ZM7.5 15.8333H4.16667V12.5H7.5V15.8333ZM16.6667 2.5H11.6667C11.4457 2.5 11.2337 2.5878 11.0774 2.74408C10.9211 2.90036 10.8333 3.11232 10.8333 3.33333V8.33333C10.8333 8.55435 10.9211 8.76631 11.0774 8.92259C11.2337 9.07887 11.4457 9.16667 11.6667 9.16667H16.6667C16.8877 9.16667 17.0996 9.07887 17.2559 8.92259C17.4122 8.76631 17.5 8.55435 17.5 8.33333V3.33333C17.5 3.11232 17.4122 2.90036 17.2559 2.74408C17.0996 2.5878 16.8877 2.5 16.6667 2.5ZM15.8333 7.5H12.5V4.16667H15.8333V7.5ZM16.6667 13.3333H15V11.6667C15 11.4457 14.9122 11.2337 14.7559 11.0774C14.5996 10.9211 14.3877 10.8333 14.1667 10.8333C13.9457 10.8333 13.7337 10.9211 13.5774 11.0774C13.4211 11.2337 13.3333 11.4457 13.3333 11.6667V13.3333H11.6667C11.4457 13.3333 11.2337 13.4211 11.0774 13.5774C10.9211 13.7337 10.8333 13.9457 10.8333 14.1667C10.8333 14.3877 10.9211 14.5996 11.0774 14.7559C11.2337 14.9122 11.4457 15 11.6667 15H13.3333V16.6667C13.3333 16.8877 13.4211 17.0996 13.5774 17.2559C13.7337 17.4122 13.9457 17.5 14.1667 17.5C14.3877 17.5 14.5996 17.4122 14.7559 17.2559C14.9122 17.0996 15 16.8877 15 16.6667V15H16.6667C16.8877 15 17.0996 14.9122 17.2559 14.7559C17.4122 14.5996 17.5 14.3877 17.5 14.1667C17.5 13.9457 17.4122 13.7337 17.2559 13.5774C17.0996 13.4211 16.8877 13.3333 16.6667 13.3333ZM8.33333 2.5H3.33333C3.11232 2.5 2.90036 2.5878 2.74408 2.74408C2.5878 2.90036 2.5 3.11232 2.5 3.33333V8.33333C2.5 8.55435 2.5878 8.76631 2.74408 8.92259C2.90036 9.07887 3.11232 9.16667 3.33333 9.16667H8.33333C8.55435 9.16667 8.76631 9.07887 8.92259 8.92259C9.07887 8.76631 9.16667 8.55435 9.16667 8.33333V3.33333C9.16667 3.11232 9.07887 2.90036 8.92259 2.74408C8.76631 2.5878 8.55435 2.5 8.33333 2.5ZM7.5 7.5H4.16667V4.16667H7.5V7.5Z"/>
        </symbol>
      </svg>
    </StyledIconsStorage>
  )
}
export default IconsStorage;