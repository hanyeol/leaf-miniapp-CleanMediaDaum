function on_loaded() {
    if (document.value("web.failed")) {
        view.object("section.error").action("show")
    } else {
        view.object("web").action("show")
    }
}

function on_web_start(data) {
    if (data["is-for-main-frame"] === "yes") {
        view.object("section.error").action("hide")

        timeout(1, function() {
            if (!document.value("web.failed")) {
                view.object("web").action("show")

                view.object("effect.loading").action("hide")
            }
        })
    }
}

function on_web_failed(data) {
    if (data["is-for-main-frame"] === "yes") {
        view.object("section.error").action("show")

        view.object("web").action("hide")
        view.object("effect.loading").action("hide")
    
        controller.action("toast", { 
            "message":controller.catalog().string("웹페이지를 로드할 수 없습니다.")
        })
    
        document.value("web.failed", true)    
    }
}

function reload() {
    timeout(0.5, function() {
        view.object("web").action("reload")
    })

    view.object("effect.loading").action("show")
    view.object("effect.loading").action("play")

    document.value("web.failed", false)
}
