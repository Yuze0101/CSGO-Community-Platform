<template>
    <div class="container">
        <div class="up-box">
            <div class="play-info">
                <div class="title">
                    <h1>开始游戏</h1>
                </div>
                <div class="select-box">
                    <select name="" id="" class="select">
                        <option value="" class="options">test1</option>
                        <option value="" class="options">test2</option>
                        <option value="" class="options">test3</option>
                    </select>
                </div>
            </div>
            <div class="card-box">
                <div class="card">
                    <div class="card-img">
                        <img src="../assets/map-card-image/nuke.jpg" />
                    </div>
                    <div class="card-info">
                        <p>地图名称</p>
                        <p>人数<span>4-5</span></p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-img">
                        <img src="../assets/map-card-image/nuke.jpg" />
                    </div>
                    <div class="card-info">
                        <p>地图名称</p>
                        <p>人数<span>4-5</span></p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-img">
                        <img src="../assets/map-card-image/nuke.jpg" />
                    </div>
                    <div class="card-info">
                        <p>地图名称</p>
                        <p>人数<span>4-5</span></p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-img">
                        <img src="../assets/map-card-image/nuke.jpg" />
                    </div>
                    <div class="card-info">
                        <p>地图名称</p>
                        <p>人数<span>4-5</span></p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-img">
                        <img src="../assets/map-card-image/nuke.jpg" />
                    </div>
                    <div class="card-info">
                        <p>地图名称</p>
                        <p>人数<span>4-5</span></p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-img">
                        <img src="../assets/map-card-image/nuke.jpg" />
                    </div>
                    <div class="card-info">
                        <p>地图名称</p>
                        <p>人数<span>4-5</span></p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-img">
                        <img src="../assets/map-card-image/nuke.jpg" />
                    </div>
                    <div class="card-info">
                        <p>地图名称</p>
                        <p>人数<span>4-5</span></p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-img">
                        <img src="../assets/map-card-image/nuke.jpg" />
                    </div>
                    <div class="card-info">
                        <p>地图名称</p>
                        <p>人数<span>4-5</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="foot">
            <button class="waiting">开始</button>
        </div>
    </div>
</template>

<script></script>

<style scoped lang="scss">
@import '../scss/global.scss';
.container {
    @include glass-blur;
    color: #fff;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    position: relative;
}
.up-box {
    height: 100%;
    display: flex;
    flex-direction: column;
}
.play-info {
    height: 8.75rem;
}
h1 {
    margin: 0;
    line-height: 6.25rem;
    color: rgba(255, 255, 255, 0.5);
    padding: 0 1.25rem;
}
.select-box {
    height: 2.5rem;
    .select {
        padding-left: 0.625rem;
        display: inline-block;
        height: 100%;
        width: 12.5rem;
        color: #fff;
        font-size: 1rem;
        outline: none;
        border: none;
        background-color: rgba(0, 0, 0, 0.2);
    }
    .options {
        background-color: rgba(0, 0, 0, 0.5);
    }
}
.card-box {
    display: flex;
    padding: 1.25rem 6.25rem;
    box-sizing: border-box;
    flex-wrap: wrap;
    height: calc(100vh - 221px);
    overflow: scroll;
    @include scrollbar;
    background-color: rgba(0, 0, 0, 0.15);
    .card {
        width: 15rem;
        height: 20rem;
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
        margin: 0.625rem;
        .card-img {
            height: 100%;
            width: 100%;
            filter: brightness(70%);
            img {
                height: 100%;
                width: 100%;
            }
        }
        .card-info {
            width: 100%;
            position: absolute;
            bottom: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        &.active {
            border: 0.625rem solid #fff;
            transition: all 0.2s;
        }
        &:hover {
            border: 0.625rem solid #fff;
            transition: all 0.2s;
        }
    }

}
.foot {
    bottom: 0;
    width: 100%;
    display: flex;
    box-sizing: border-box;
    justify-content: flex-end;
    align-items: center;
    padding: 1.25rem 2.5rem;
    background-color: rgba(0, 0, 0, 0.15);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    button {
        width: 15.625rem;
        height: 2.5rem;
        border: none;
        outline: none;
        font-size: 1.25rem;
        font-weight: bold;
        text-shadow: 3px 3px 3px black;
        position: relative;
        overflow: hidden;
        &.waiting {
            background: linear-gradient(90deg, #39be40, #0e4910, #0e4910);
            color: #4caf50;
            border: 1px solid #39be40;
        }
        &.waiting:hover {
            box-shadow: 0px 0px 20px #46e94e;
            transition: all 0.5s;
        }
        &.waiting::after {
            content: '';
            width: 3.125rem;
            height: 2.5rem;
            display: inline-block;
            background: linear-gradient(90deg, #39be4000, #39be406e, #39be40);
            position: absolute;
            left: -3.125rem;
            top: 0;
            animation: scanner 4s linear infinite;
            animation-delay: 3s;
        }
        &.searching {
            color: #c21b1b;
            background: none;
            background-color: #300202;
        }
        &.searching:hover {
            box-shadow: 0px 0px 20px #c21b1b;
            transition: all 0.5s;
        }
    }
}
@keyframes scanner {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(31.25rem);
    }
}
</style>
