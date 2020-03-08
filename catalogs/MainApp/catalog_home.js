function on_loaded() {
    if (document.value("web.failed")) {
        view.object("section.error").action("show")
    } else {
        view.object("web").action("show")
    }
}

function on_web_start(data) {
    view.object("web").action("show")
    view.object("section.error").action("hide")
}

function on_web_failed(data) {
    view.object("section.error").action("show")
    
    controller.action("toast", { 
        "message":controller.catalog().string("웹페이지를 로드할 수 없습니다.")
    })

    document.value("web.failed", true)
}

function reload() {
    view.object("web").action("reload")

    document.value("web.failed", false)
}
