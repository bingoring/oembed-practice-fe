<template lang="">

    <div class="container"> 
      
      <header> 
        <div id="title">oEmbed Test</div> 
        <div id="input_Box"> 
          <input type="text" placeholder="url을 입력해주세요"v-model="urlText"/> 
          <input type="button" value="확인" @click="requestUrl"/>
        </div> 
      </header>
      <article> 
        <div id="content_wrap"> 
          <div id="title_container" v-if="this.allEmbedData.title != null">{{this.allEmbedData.title}}</div> 
          <ul id="responseDataInContainer" v-if="this.allEmbedData.type != '' && this.allEmbedData.type != null">
            <li><div>type</div><div>{{this.allEmbedData.type}}</div></li>
            <li><div>version</div><div>{{this.allEmbedData.version}}</div></li>
            <li><div>provider_name</div><div>{{this.allEmbedData.provider_name}}</div></li>
            <li><div>provider_url</div><div>{{this.allEmbedData.provider_url}}</div></li>
            <li><div>author_name</div><div>{{this.allEmbedData.author_name}}</div></li>
            <li><div>html({{this.allEmbedData.width}}/{{this.allEmbedData.height}}) </div>
              <div>
                {{this.allEmbedData.html}}
                <!-- <iframe src="https://player.vimeo.com/video/666109154?h=96ceb48c12&amp;app_id=122963" width="426" height="214" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Learning to Drown | The North Face"></iframe> -->
                <div id="editor" ref="editor"></div>
                <div 
                  id="iframe-wrapper"
                  :style="iframe.wrapperStyle" 
                >
                  <iframe 
                    v-if="loaded"
                    :src="iframe.src"
                    :style="iframe.style"
                    :height="iframe.style.height"
                    :width="iframe.style.width"
                    frameborder="0"
                  ></iframe>
                </div>
              </div>
            </li>
            <li><div>width</div><div>{{this.allEmbedData.width}}</div></li>
            <li><div>height</div><div>{{this.allEmbedData.height}}</div></li>
            <li><div>thubnail_url</div>
              <div>
                {{this.allEmbedData.thumbnail_url}}
                <div
                  id="img-wrapper"
                  :style="img.wrapperStyle" 
                >
                  <img 
                    v-if="imgLoaded"
                    :src="img.src"
                    :width="img.style.width"
                    :heigth="img.style.height"
                  >
                </div>
              </div>
            </li>
            
            <li><div>thubnail_width</div><div>{{this.allEmbedData.thumbnail_width}}</div></li>
            <li><div>thubnail_height</div><div>{{this.allEmbedData.thumbnail_height}}</div></li>
          </ul>
        </div> 
      </article>
      
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      urlText: '',
      parsedhtml: '',
      allEmbedDataLater: [],
      loaded: false,
      videoUrl: '',
      iframe: {
        src: null,
        style: null,
        wrapperStyle: null,
      },
      imgLoaded: false,
      img: {
        src: null,
        style: null,
        wrapperStyle: null,
      },
      // bootstrap 'b-table' 필드 설정
    };
  },
  computed: {
    ...mapState({
      allEmbedData: (state) => state.allEmbedData,
    }),
  },
  mounted(){
    this.imgLoaded = false;
    this.loaded = false;
  },
  methods: {
    async requestUrl(){
      await this.$store.dispatch("FETCH_EMBED_DATA", this.urlText);
      
      console.log("after mutation")
      if(this.allEmbedData.html.includes("vimeo") || this.allEmbedData.html.includes("youtube")){
        this.requestVideo();
        this.requestThumbnail();
      }else{
        this.imgLoaded = false;
        this.loaded = false;
      }
    },
    requestVideo(){
      const firstIndex = this.allEmbedData.html.indexOf("src=");
      const tmpUrl = this.allEmbedData.html.substring(firstIndex, this.allEmbedData.html.length-1);
      const videoUrlArr = tmpUrl.split('"');
      this.videoUrl = videoUrlArr[1];
      this.iframe.style = {
        width: this.allEmbedData.width + "px",
        height: this.allEmbedData.height + "px",
        margin: "0 auto",
      }    
      this.iframe.wrapperStyle = {
        overflow: 'hidden',
        width: "100%",
        height: this.allEmbedData.height + "px",
      } 
      this.iframe.src = this.videoUrl;
      this.loaded = true;
    },
    requestThumbnail(){
      this.img.style = {
        width: this.allEmbedData.thumbnail_width + "px",
        height: this.allEmbedData.thumbnail_height + "px",
        margin: "0 auto",
      }    
      this.img.wrapperStyle = {
        overflow: 'hidden',
        width: "100%",
        height: this.allEmbedData.thumbnail_height + "px",
      } 
      this.img.src = this.allEmbedData.thumbnail_url;
      this.imgLoaded = true;
    },
  },
};
</script>
<style>
body,
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

a:link {
  color: #2eaab7;
}

header {
  width: 100%;
  height: 180px;
  background-color: #2eaab7;
}

#title {
  width: 100%;
  height: 100px;
  line-height: 120px;
  text-align: center;
  color: white;
  font-size: 30px;
  font-weight: bold;
}

#input_Box {
  width: 80%;
}

#input_Box > input[type="text"] {
  width: 100%;
  height: 50px;
  color: darkgray;
  font-size: 1.2em;
  border-radius: 3px;
  text-indent: 1em;
}

#input_Box > input[type="button"] {
  width: 60px;
  height: 38px;
  font-size: 1em;
  font-weight: bold;
  margin: -70px;
  border: none;
  border-radius: 3px;
  background-color: #ffcd45;
}

article {
  width: 100%;
  overflow: auto;
  background-color: #eee;
}

#content_wrap {
  width: 1024px;
  margin: 30px auto;
  border: 1px solid dimgray;
  border-radius: 3px;
  background-color: white;
}

#title_container,
#responseDataInContainer {
  width: 924px;
  margin: 30px auto;
}

#title_container > div,
#responseDataInContainer li {
  width: 100%;
  padding: 10px 0;
  display: flex;
  flex-wrap: initial;
  background-color: white;
}

#responseDataInContainer li:nth-child(2n) {
  background-color: #eee;
}

#title_container > div > div:nth-child(1),
#responseDataInContainer li > div:nth-child(1) {
  flex-basis: 200px;
  word-break: break-all;
  white-space: normal;
  padding-left: 10px;
}

#title_container > div > div:nth-child(2),
#responseDataInContainer li > div:nth-child(2) {
  flex-basis: 100%;
  word-break: break-all;
  white-space: normal;
  padding-left: 10px;
  font-weight: bold;
}

#title_container > div > div:nth-child(2) {
  font-size: 20px;
  font-weight: bold;
}

xmp {
  width: 100%;
  white-space: normal;
}

</style>