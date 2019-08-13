import Sharing from "discourse/lib/sharing";

export default {
  name: "sharing-sources",

  initialize: function() {

    Sharing.addSource({
      id: "twitter",
      icon: "fab-twitter-square",
      generateUrl: function(link, title) {
        return (
          "http://twitter.com/intent/tweet?url=" +
          encodeURIComponent(link) +
          "&text=" +
          encodeURIComponent(title)
        );
      },
      shouldOpenInPopup: true,
      title: I18n.t("share.twitter"),
      popupHeight: 265
    });

    Sharing.addSource({
      id: "facebook",
      icon: "fab-facebook-square",
      title: I18n.t("share.facebook"),
      generateUrl: function(link, title) {
        return (
          "http://www.facebook.com/sharer.php?u=" +
          encodeURIComponent(link) +
          "&t=" +
          encodeURIComponent(title)
        );
      },
      shouldOpenInPopup: true
    });

    Sharing.addSource({
      id: "email",
      icon: "envelope-square",
      title: I18n.t("share.emailxxxx"),
      generateUrl: function(link, title) {
        return (
          "mailto:?to=&subject=" +
          encodeURIComponent(
            "[" + Discourse.SiteSettings.title + "] " + title
          ) +
          "&body=" +
          encodeURIComponent(link)
        );
      },
      shouldOpenInPopup: true
    });


  // weibo: "fab-weibo",
  // weixin: "fab-weixin",

    Sharing.addSource({
      id: 'google',
      // faIcon: 'fa-google',
      icon: "fab-twitter-square",
      title: "google",
      generateUrl: function(link, title) {
        return "http://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(link) + "&title=" + encodeURIComponent(title);
      },
      shouldOpenInPopup: true,
      popupHeight: 265
    });

    // Sharing.addSource({
    //     id: 'weibo',
    //     faIcon: 'fa-weibo',
    //     title: I18n.t('share.weibo'),
    //     generateUrl(link, title) {
    //       return "http://service.weibo.com/share/share.php?url=" + encodeURIComponent(link) + "&title=" + encodeURIComponent(title);
    //     }
    //     // shouldOpenInPopup: true,
    //     // popupHeight: 370
    //   });

    // Sharing.addSource({
    //   id: 'linkedin',
    //   icon: 'fa-linkedin-square',
    //   generateUrl: function(link, title) {
    //     return "http://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(link) + "&title=" + encodeURIComponent(title);
    //   },
    // });

    // Sharing.addSource({
    //   id: "weibo",
    //   icon: "fab-link-square",
    //   title: "link",
    //   generateUrl: function(link, title) {
    //     return (
    //       "http://service.weibo.com/share/share.php?url=" +
    //       encodeURIComponent(
    //         "[" + Discourse.SiteSettings.title + "] " + title
    //       ) +
    //       "&body=" +
    //       encodeURIComponent(link)
    //     );
    //   }
    // });


  }
};
