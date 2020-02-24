document.addEventListener('DOMContentLoaded', function() {
    var hiding_replies_style = document.createElement('style');

    hiding_replies_style.innerHTML = `
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

    document.head.appendChild(hiding_replies_style);
})
