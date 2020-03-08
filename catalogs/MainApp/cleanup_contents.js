document.addEventListener('DOMContentLoaded', function() {
    var cleanup_contents_style = document.createElement('style');

    cleanup_contents_style.innerHTML = `
        .cmt_view,
        .btn_cmt,
        .txt_cmt,
        .box_cmtrank,
        .box_viewrelate,
        .inner_bnr,
        .item_bnr,
        .item_ad,
        .ad_body,
        .ad_banner,
        #daumAdWrap,
        #daumAd,
        #footerAd {
            display: none !important;
        }
        .info_thumb .txt_cp {
            visibility: visible;
        }
        .info_thumb {
            visibility: hidden;
        }
    `;

    document.head.appendChild(cleanup_contents_style);
})
