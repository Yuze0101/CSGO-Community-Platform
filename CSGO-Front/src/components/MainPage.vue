<template>
    <div class="container">
        <div class="left">
            <div class="scroll-box">
                <div class="plate">
                    <div class="title">
                        <p>新闻</p>
                    </div>
                    <div class="scroll">
                        <div class="card">
                            <div class="card-back">
                                <img src="http://s2.328888.xyz/2021/08/06/114ca7c991bcf.jpg" class="card-img" />
                            </div>
                            <div class="card-body">
                                <div class="card-time">2020-01-01</div>
                                <div class="card-title">这里是新闻标题</div>
                                <div class="card-info">
                                    这里是新闻内容这里是新闻内容这里是新闻内容这里是新闻内容这里是新闻内容
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shop-box"></div>
        </div>
        <div class="right"></div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../scss/global.scss";
.container {
    color: white;
    display: flex;
}
.left {
    background-color: rgba(183, 188, 143, 0.329);
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.scroll-box {
    width: 100%;
    flex-grow: 1;
    box-sizing: border-box;
    padding: 20px;
}
.plate {
    box-sizing: border-box;
    // height: 100%;
    @include glass-blur;
    padding-bottom: 20px;
}
.title,
.title p {
    margin: 0;
    width: 100%;
    background-color: rosybrown;
}
.scroll {
    overflow: scroll;
    &::-webkit-scrollbar {
        width: 0;
    }
}
.card {
    width: 100%;
    height: 450px;
}
.shop-box {
    background-color: rgba(144, 143, 188, 0.61);
    width: 100%;
    flex-grow: 1;
    box-sizing: border-box;
    padding: 20px;
}
.right {
    background-color: rgba(180, 143, 188, 0.418);
    width: 50%;
    height: 100%;
}
</style>