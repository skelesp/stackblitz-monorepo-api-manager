"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validChannels = void 0;
exports.isValidChannel = isValidChannel;
// Type guard to check if a channel exists in the registry
function isValidChannel(channel) {
    return channel in exports.validChannels;
}
// Runtime validation of channels
exports.validChannels = {
    'user.get': true,
    'post.create': true,
};
